function Button({ title, style, titleStyle, shape }) {
  return (
    <button className={style}>
      <span className={titleStyle}>{title}</span>
      {shape}
    </button>
  );
}

export default Button;
