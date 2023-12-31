import { Fragment, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Combobox, Transition } from "@headlessui/react";
import ChevronUpDownIcon from "@heroicons/react/20/solid/ChevronUpDownIcon";
import CheckIcon from "@heroicons/react/20/solid/CheckIcon";

import { Breed } from "../types";

type Props = {
  invalid: boolean;
  name: string;
  breeds: Breed[];
  value: Breed;
  onChange: (breed: Breed) => void;
  onBlur: () => void;
};

export const BreedSelect = ({
  name,
  invalid,
  breeds,
  value,
  onChange,
  onBlur,
}: Props) => {
  const [query, setQuery] = useState("");

  const filteredBreeds =
    query === ""
      ? breeds
      : breeds.filter((breed) =>
          breed.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, "")),
        );

  return (
    <Combobox name={name} onChange={onChange}>
      <div className="relative">
        <div
          className={twMerge(
            "relative overflow-hidden rounded-lg border border-gray-300",
            invalid && [
              "border-red-500",
              "text-red-600",
              "focus:border-red-500",
              "focus:ring-red-500",
            ],
          )}
        >
          <Combobox.Input
            className="h-14 w-full rounded-lg border-none pl-4 pr-8"
            displayValue={() => value?.name}
            onBlur={onBlur}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options
            onBlur={onBlur}
            className="absolute mt-1 max-h-72 z-10 w-full overflow-auto rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
          >
            {filteredBreeds.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none px-4 py-2 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredBreeds.map((breed) => (
                <Combobox.Option
                  key={breed.id}
                  className={({ active }) =>
                    twMerge("relative py-4 pl-10 pr-4", active && "bg-gray-100")
                  }
                  value={breed}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={twMerge(
                          "block truncate",
                          selected && "font-medium",
                        )}
                      >
                        {breed.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-lime-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
};
