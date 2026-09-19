import React, { useState } from 'react';

type IconItem = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>> | React.ComponentType<any>;
  label: string;
  customClass?: string;
  link?: string;
  hoverColor?: string; // optional per-icon override
};

interface GlassIconsProps {
  items: IconItem[];
  className?: string;
  baseColor?: string;  // icon colour at rest (optional)
  hoverColor?: string; // icon colour on hover / keyboard focus
}

const GlassIcons: React.FC<GlassIconsProps> = ({
  items,
  className,
  baseColor,
  hoverColor = '#77aca2',
}) => {
  const [active, setActive] = useState<number | null>(null);

  return (
    <div className={`icon-btns ${className || ''}`}>
      {items.map((item: IconItem, index: number) => {
        const Icon = item.icon;
        const color = active === index ? item.hoverColor ?? hoverColor : baseColor;

        return (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className={`icon-btn ${item.customClass || ''}`}
            aria-label={item.label}
            onMouseEnter={() => setActive(index)}
            onMouseLeave={() => setActive(null)}
            onFocus={() => setActive(index)}
            onBlur={() => setActive(null)}
          >
            <span className="icon-btn__back" />
            <span className="icon-btn__front" />
            <span
              className="icon-btn__icon"
              aria-hidden="true"
              style={{ color, transition: 'color 0.3s ease' }}
            >
              {/* `color` prop covers Lucide (stroke) and react-icons (style.color);
                  inline style beats any stylesheet rule */}
              <Icon className="w-5 h-5" color={color} style={{ color, transition: 'color 0.3s ease' }} />
            </span>
          </a>
        );
      })}
    </div>
  );
};

export default GlassIcons;