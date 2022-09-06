import { ChangeEvent, FC, useEffect, useState } from "react";
import SimpleBar from "simplebar-react";
import { Spinner } from "shared/ui/Spinner";
import { useDebounce } from "shared/lib/hooks/useDebounce";
import { useOutside } from "shared/lib/hooks/useOutside";
import { useSearchUsersQuery } from "../model/github.api";

type Props = {
  onSubmit: (username: string) => void;
};

export const SearchInput: FC<Props> = ({ onSubmit }) => {
  const [search, setSearch] = useState("");
  const [debounced] = useDebounce(search);
  const [dropdown, setDropdown] = useState(false);
  const { ref, clickIsOutside, setClickIsOutside } = useOutside();
  const { data, isLoading, isError } = useSearchUsersQuery(debounced, {
    skip: debounced.length < 3,
  });

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setClickIsOutside(false);
    setSearch(e.target.value);
  };

  const userHandler = (username: string) => {
    setDropdown(false);
    onSubmit(username);
  };

  useEffect(() => {
    setDropdown(debounced.length > 2 && data?.length! > 0);
  }, [debounced, data]);

  return (
    <div className={"relative z-10 w-full mb-8 bg-white"} ref={ref}>
      <input
        type="text"
        className={"border py-2 px-4 w-full h-[42px] focus:outline-primary"}
        placeholder={"Search for GH username..."}
        value={search}
        onChange={inputHandler}
      />
      {dropdown && !clickIsOutside && (
        <ul className={"absolute top-[42px] shadow-md w-full bg-white"}>
          <SimpleBar className={"max-h-[200px]"}>
            {isLoading && (
              <div className={"flex justify-center"}>
                <Spinner></Spinner>
              </div>
            )}

            {isError && (
              <p className={"text-center text-red-600"}>
                Something went wrong...
              </p>
            )}

            {data?.map((user) => (
              <li
                key={user.id}
                onClick={() => userHandler(user.login)}
                className={
                  "py-2 px-4 hover:bg-primary hover:text-white transition-colors cursor-pointer"
                }
              >
                {user.login}
              </li>
            ))}
          </SimpleBar>
        </ul>
      )}
    </div>
  );
};
