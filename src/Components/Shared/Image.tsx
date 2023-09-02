interface Props {
  src: string;
  alt?: string;
  height: number | string;
  width: number | string;
  style?: Record<string, any>;
}

export default (props: Props) => {
  return <img {...props} />;
};
