import React from 'react';

type IconItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ComponentType<any>;
  label: string;
  customClass?: string;
  link?: string;
};

interface GlassIconsProps {
  items: IconItem[];
  className?: string;
}

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className }) => {
  return (
    <div className={`icon-btns ${className || ''}`}>
      {items.map((item: IconItem, index: number) => {
        const Icon = item.icon;
        return (
          <a
  key={index}
  href={item.link}
  target="_blank"
  rel="noopener noreferrer"
  className={`icon-btn ${item.customClass || ''}`}
  aria-label={item.label}
>
            <span className="icon-btn__back" />
            <span className="icon-btn__front" />
            <span className="icon-btn__icon" aria-hidden="true">
              <Icon className="w-5 h-5" />
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default GlassIcons;
