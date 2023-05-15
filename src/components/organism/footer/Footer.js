import classes from './Footer.module.sass';
import SVGIcon from '@/components/svgicon/svgicon';

const icons = [
  { name: './assets/icons/element1.svg' },
  { name: './assets/icons/html5.svg' },
  { name: './assets/icons/css.svg' },
  { name: './assets/icons/javascript.svg' },
  { name: './assets/icons/react.svg' },
  { name: './assets/icons/node.svg' },
  { name: './assets/icons/sass.svg' },
  { name: './assets/icons/affinity.svg' },
  { name: './assets/icons/corelDraw.svg' },
  { name: './assets/icons/ilustrator.svg' },
  { name: './assets/icons/photoshop.svg' },
  { name: './assets/icons/git.svg' },
  { name: './assets/icons/element1.svg' },
];
export default function Fotter() {
  let number = 0;
  return (
    <div className={classes.mainStyle}>
      {/* eslint-disable-next-line no-return-assign */}
      {icons.map((icon) => (
        <SVGIcon
          key={`${icon.name}${(number += 1)}`}
          image={icon.name}
          classElement={classes.icon}
        />
      ))}
    </div>
  );
}
