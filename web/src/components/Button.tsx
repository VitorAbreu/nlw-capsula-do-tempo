const styles = {
  'color': 'red',
}

interface ButtonProperties {
  title: string;
}
export function Button(props: ButtonProperties) {
  return (
    <p style={styles}>{props.title}</p>
  )
}