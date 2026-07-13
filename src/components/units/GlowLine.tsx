interface GlowLineProps {
    className?: string;
}

export function GlowLine({ className = "" }: GlowLineProps) {
    return (
        <div className={`relative h-[2px] w-24 ${className}`}>
            <div className="absolute inset-0 rounded-full bg-primary blur-md opacity-80" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-primary to-transparent" />
        </div>
    );
}