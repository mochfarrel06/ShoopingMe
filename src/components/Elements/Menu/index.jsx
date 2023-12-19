import {Item} from "./Item";

export function MenuList({navigation, classNames}) {
  return (
    <div className="flex items-center">
      {navigation.map((item) => (
        <Item item={item} classNames={classNames} />
      ))}
    </div>
  );
}
