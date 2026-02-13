import { type NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { client } from '../../../../sanity/lib/client';
import { isValidSignature, SIGNATURE_HEADER_NAME } from '@sanity/webhook';

const secret = process.env.SANITY_WEBHOOK_SECRET || '';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    const signature = req.headers.get(SIGNATURE_HEADER_NAME);
    const body = await req.text(); // Read body as text for signature verification

    if (!secret) {
        console.error('SANITY_WEBHOOK_SECRET is not set');
        return NextResponse.json({ message: 'Configuration error' }, { status: 500 });
    }

    if (!isValidSignature(body, signature as string, secret)) {
        return NextResponse.json({ message: 'Invalid signature' }, { status: 401 });
    }

    const { _type, title, slug, _id } = JSON.parse(body);

    console.log(`Received webhook for ${_type}: ${title}`);

    try {
        // Fetch all active subscribers
        const subscribers = await client.fetch<string[]>(
            `*[_type == "subscriber" && isActive == true].email`
        );

        if (subscribers.length === 0) {
            return NextResponse.json({ message: 'No subscribers to notify' }, { status: 200 });
        }

        let subject = '';
        let typeLabel = '';
        let url = `https://educabea.es`;

        switch (_type) {
            case 'post':
                subject = `📝 Nuevo artículo de Beatriz: ${title}`;
                typeLabel = 'Nuevo Artículo en el Blog';
                url = `https://educabea.es/blog/${slug.current}`;
                break;
            case 'material':
                subject = `🎁 Nuevo material didáctico: ${title}`;
                typeLabel = 'Nuevo Recurso Disponible';
                url = `https://educabea.es/material-didactico/${slug.current}`;
                break;
            case 'technique':
                subject = `💡 Nueva técnica de estudio: ${title}`;
                typeLabel = 'Mejora tu Aprendizaje';
                url = `https://educabea.es/tecnicas-de-estudio/${slug.current}`;
                break;
            default:
                return NextResponse.json({ message: 'Type not supported for notification' }, { status: 200 });
        }

        // Send emails (using Resend Batch API if possible, or loop for simplicity in MVP)
        // For starter tiers, Resend allows batching.

        const { data, error } = await resend.emails.send({
            // Let's use BCC to protect privacy and save API calls.
            from: 'Educabea <hola@educabea.es>', // Verified domain
            to: ['beatrizoc99@hotmail.com'], // Send to admin
            bcc: subscribers, // Blind Carbon Copy to all subscribers
            subject: subject,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2 style="color: #D97757;">${typeLabel}</h2>
                    <h1 style="color: #2D3748;">${title}</h1>
                    <p style="font-size: 16px; color: #4A5568;">
                        Hola, acabo de publicar nuevo contenido que creo que te va a interesar.
                    </p>
                    <a href="${url}" style="display: inline-block; background-color: #D97757; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold;">
                        Leer ahora
                    </a>
                    <p style="margin-top: 24px; font-size: 12px; color: #718096;">
                        Recibes este correo porque te suscribiste en educabea.es.
                    </p>
                </div>
            `,
        });

        if (error) {
            console.error('Resend error:', error);
            return NextResponse.json({ error }, { status: 500 });
        }

        return NextResponse.json({ message: 'Emails sent successfully', count: subscribers.length }, { status: 200 });

    } catch (err) {
        console.error('Webhook error:', err);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
