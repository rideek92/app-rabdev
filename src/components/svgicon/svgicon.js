export default function SVGIcon({ image, classElement }) {
  return (
    <div
      style={{
        maskImage: `url(${image})`,
        // backgroundColor: `${color || 'white'}`,
        WebkitMaskImage: `url(${image})`,
        WebkitMaskRepeat: 'no-repeat',
        WebkitMaskSize: '100% 100%',
        maskSize: '100% 100%',
        maskRepeat: 'no-repeat',
        // width: `${size || '10px'}`,
        // height: `${size || '10px'}`,
      }}
      className={classElement}
    />
  );
}
