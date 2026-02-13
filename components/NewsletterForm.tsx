'use client';

import { useState } from 'react';
import { Loader2, Mail, CheckCircle, AlertCircle } from 'lucide-react';

export default function NewsletterForm() {
    const [email, setEmail] = useState('');
    const [acceptedPrivacy, setAcceptedPrivacy] = useState(false);
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!acceptedPrivacy) {
            setStatus('error');
            setMessage('Debes aceptar la política de privacidad para suscribirte.');
            return;
        }

        setStatus('loading');

        try {
            const res = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (!res.ok) throw new Error(data.error || 'Algo salió mal');

            setStatus('success');
            setMessage(data.message);
            setEmail('');
        } catch (error: any) {
            setStatus('error');
            setMessage(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full max-w-sm">
            <h4 className="text-lg text-white mb-2 flex items-center gap-2">
                <Mail size={18} />
                Suscríbete a mi newsletter
            </h4>
            <div className="relative">
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Tu correo"
                    className="w-full px-4 py-3 rounded-lg border-2 border-white/50 focus:border-secondary outline-none text-secondary pr-12 disabled:opacity-50"
                    required
                    disabled={status === 'loading' || status === 'success'}
                />
                <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="absolute right-1 top-1 bottom-1 bg-secondary text-primary font-bold px-4 rounded-md hover:bg-primary hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                >
                    {status === 'loading' ? (
                        <Loader2 className="animate-spin" size={18} />
                    ) : (
                        'OK'
                    )}
                </button>
            </div>

            <div className="flex items-start gap-2 mt-1">
                <input
                    type="checkbox"
                    id="privacy-newsletter"
                    checked={acceptedPrivacy}
                    onChange={(e) => setAcceptedPrivacy(e.target.checked)}
                    className="mt-1 w-4 h-4 rounded border-white/50 bg-transparent text-secondary focus:ring-secondary focus:ring-offset-primary"
                    required
                />
                <label htmlFor="privacy-newsletter" className="text-xs text-white/80 leading-tight">
                    He leído y acepto la <a href="/politica-de-privacidad" target="_blank" className="underline hover:text-secondary">Política de Privacidad</a>.
                </label>
            </div>

            {status === 'success' && (
                <p className="text-green-300 text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                    <CheckCircle size={14} />
                    {message}
                </p>
            )}

            {status === 'error' && (
                <p className="text-red-300 text-sm flex items-center gap-2 animate-in fade-in slide-in-from-top-2">
                    <AlertCircle size={14} />
                    {message}
                </p>
            )}

            <p className="text-white/50 text-xs mt-1">
                Recibe novedades y recursos gratuitos. Sin spam.
            </p>
        </form>
    );
}
