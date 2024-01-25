function propMerge(defaultProps, props) {
  return { ...defaultProps, ...props };
}

export default propMerge;
