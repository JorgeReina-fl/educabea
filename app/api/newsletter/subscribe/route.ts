import { type NextRequest, NextResponse } from 'next/server';
import { client } from '../../../../sanity/lib/client';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { email } = await req.json();

        if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
            return NextResponse.json({ error: 'Email inválido' }, { status: 400 });
        }

        // Check if already subscribed
        const existing = await client.fetch(
            `*[_type == "subscriber" && email == $email][0]`,
            { email }
        );

        if (existing) {
            return NextResponse.json({ message: 'Ya estás suscrito/a.' }, { status: 200 });
        }

        // Create subscriber in Sanity
        await client.create({
            _type: 'subscriber',
            email,
            subscribedAt: new Date().toISOString(),
            isActive: true,
        });

        // Send Welcome Email via Resend
        try {
            await resend.emails.send({
                from: 'Educabea <hola@educabea.es>',
                to: email,
                subject: '🎁 Aquí tienes tu Guía Montessori',
                html: `
                    <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                        <h1 style="color: #D97757;">¡Gracias por suscribirte!</h1>
                        <p style="font-size: 16px; color: #4A5568;">
                            Me alegra mucho que te hayas unido a nuestra comunidad. 
                            Tal como prometí, aquí tienes la guía con las 5 actividades Montessori.
                        </p>
                        <a href="https://educabea.es/guia-montessori.pdf" style="display: inline-block; background-color: #D97757; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin-top: 20px;">
                            Descargar Guía PDF
                        </a>
                        <p style="margin-top: 24px; font-size: 12px; color: #718096;">
                            Si el botón no funciona, copia y pega este enlace: https://educabea.es/guia-montessori.pdf
                        </p>
                    </div>
                `,
            });
        } catch (emailError) {
            console.error('Error sending welcome email:', emailError);
            // We don't fail the request if email fails, as subscription is successful
        }

        return NextResponse.json({ message: '¡Gracias por suscribirte!' }, { status: 201 });

    } catch (error) {
        console.error('Error subscription:', error);
        return NextResponse.json({ error: 'Error interno del servidor' }, { status: 500 });
    }
}
