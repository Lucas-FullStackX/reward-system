import cn from 'classnames';

export enum IconCatalog {
  adjustmentsHorizontal = 'M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75',
  arrowLongLeft = 'M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18',
  arrowLongRight = 'M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3',
  arrowRightOnRectangle = 'M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9',
  checkCircle = 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  chevronDown = 'M19.5 8.25l-7.5 7.5-7.5-7.5',
  discord = 'M18.93 5.38a16.492 16.492 0 0 0-4.07-1.263.062.062 0 0 0-.066.03c-.186.34-.355.687-.507 1.042a15.223 15.223 0 0 0-4.572 0 10.568 10.568 0 0 0-.514-1.041.064.064 0 0 0-.066-.031 16.447 16.447 0 0 0-4.07 1.263.058.058 0 0 0-.028.023c-2.593 3.873-3.303 7.652-2.955 11.383a.069.069 0 0 0 .027.047 16.587 16.587 0 0 0 4.994 2.525.065.065 0 0 0 .07-.024c.386-.525.727-1.08 1.022-1.662a.063.063 0 0 0-.035-.088 10.925 10.925 0 0 1-1.56-.743.065.065 0 0 1-.032-.052.064.064 0 0 1 .025-.055c.106-.078.209-.16.31-.242a.062.062 0 0 1 .065-.009c3.273 1.494 6.816 1.494 10.05 0a.061.061 0 0 1 .066.008c.1.082.206.165.311.243a.064.064 0 0 1-.005.107c-.499.291-1.02.54-1.561.743a.063.063 0 0 0-.041.063c0 .009.003.017.007.025.3.578.64 1.133 1.02 1.662a.064.064 0 0 0 .07.023 16.534 16.534 0 0 0 5.003-2.524.065.065 0 0 0 .026-.046c.417-4.314-.699-8.062-2.957-11.384a.051.051 0 0 0-.026-.024ZM8.684 14.514c-.985 0-1.797-.904-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.01 0 1.814.912 1.798 2.015 0 1.112-.797 2.016-1.798 2.016Zm6.646 0c-.985 0-1.797-.904-1.797-2.016 0-1.11.796-2.015 1.797-2.015 1.009 0 1.813.912 1.797 2.015 0 1.112-.788 2.016-1.797 2.016Z',
  heart = 'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
  gitHub = 'M12 2C6.478 2 2 6.478 2 12c0 4.418 2.865 8.167 6.84 9.49.498.092.66-.218.66-.482v-1.861c-2.782.605-3.36-1.18-3.36-1.18-.456-1.156-1.112-1.464-1.112-1.464-.907-.62.07-.607.07-.607 1.004.07 1.532 1.03 1.532 1.03.892 1.529 2.34 1.087 2.91.832.09-.646.348-1.088.635-1.337-2.22-.254-4.556-1.112-4.556-4.943a3.87 3.87 0 0 1 1.03-2.684c-.103-.252-.446-1.27.098-2.647 0 0 .84-.268 2.75 1.026A9.59 9.59 0 0 1 12 6.836a9.62 9.62 0 0 1 2.505.337c1.91-1.294 2.748-1.026 2.748-1.026.544 1.378.201 2.396.098 2.647.642.7 1.029 1.593 1.029 2.684 0 3.841-2.34 4.687-4.566 4.935.358.31.686.918.686 1.851v2.744c0 .266.16.579.668.48A10.003 10.003 0 0 0 22 12c0-5.522-4.477-10-10-10Z',
  trash = 'm14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0',
  xCircle = 'M6 18L18 6M6 6l12 12',
}

export interface IconProps {
  /**
   * The icon to display
   */
  icon: IconCatalog;

  /**
   * Specify if the icon is solid or not.
   */
  isSolid?: boolean;

  /**
   * Specify the stroke width.
   */
  strokeWidth?: number;

  /**
   * Specify an optional className to be added to the component.
   */
  className?: string;

  /**
   * The callback to get notified when the icon was clicked.
   */
  onClick?: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

/**
 * The Icons catalog
 */
export const Icon = ({
  icon = IconCatalog.arrowLongRight,
  isSolid = false,
  strokeWidth = 1.5,
  className,
  onClick,
}: IconProps) => {
  const classes = cn(className, {
    'fill-transparent': !isSolid,
  });
  return (
    <svg
      data-testid="Icon"
      className={classes}
      stroke={isSolid ? undefined : 'currentColor'}
      fill={isSolid ? 'currentColor' : undefined}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      strokeWidth={strokeWidth}
      focusable="false"
      aria-hidden="true"
      onClick={onClick}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={icon} />
    </svg>
  );
};
