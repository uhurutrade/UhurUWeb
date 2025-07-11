export default function Logo({ isHero = false }: { isHero?: boolean }) {
  const textColor = isHero ? 'text-white' : 'text-foreground';
  const bgColor = isHero ? 'bg-white' : 'bg-foreground';

  return (
      <div className="font-headline text-2xl font-bold tracking-wider w-20 flex items-center gap-1" translate="no">
          <div className="relative">
              <div className={textColor}>UHU</div>
              <div className={`absolute left-0 right-0 h-0.5 ${bgColor} -bottom-1`}></div>
          </div>
          <div className="relative">
              <div className={textColor}>RU</div>
              <div className={`absolute left-0 right-0 h-0.5 ${bgColor} -top-1`}></div>
          </div>
      </div>
  );
};
