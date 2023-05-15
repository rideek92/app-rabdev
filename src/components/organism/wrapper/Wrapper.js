import classes from './Wrapper.module.sass';

export default function Wrapper(props) {
  return (
    <>
      <div className={classes.wrapper}>{props.children}</div>
    </>
  );
}
