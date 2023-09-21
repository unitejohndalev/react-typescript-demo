import { Name } from "./Person.types";

type PersonListProps = {
  names: Name[];
};

const PersonList = (props: PersonListProps) => {
  return (
    <div>
      <>
        {props.names.map((list) => {
          return (
            <h2 key={list.first}>
              {list.first} {list.last}
            </h2>
          );
        })}
      </>
    </div>
  );
};

export default PersonList;
