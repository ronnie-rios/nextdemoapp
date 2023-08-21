"use client";
import { SearchManufactureProps } from "@/types";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { useState, Fragment } from "react";
import { manufacturers } from "@/constants";

const SearchManufacture = ({
  manufacture,
  setManufacture,
}: SearchManufactureProps) => {
  const [query, setQuery] = useState("");

  const filteredManu = query ==='' ? manufacturers : manufacturers.filter(item => (
    item.toLowerCase().replace(/\s+/g, '').includes(query.toLowerCase().replace(/\s+/g,''))
  ))

  return (
    <div className="search-manufacturer">
      <Combobox>
        <div className="relative w-full ">
          <Combobox.Button className="absoulte top-[14px]">
            <Image
              src="/car-logo.svg"
              width={20}
              height={20}
              className="ml-4"
              alt="car logo"
            />
          </Combobox.Button>
          <Combobox.Input
            className="search-manufactuer__input"
            placeholder="VW"
            displayValue={(manufacture: string) => manufacture}
            onChange={(e) => setQuery(e.target.value)}
          />

          <Transition
            as={Fragment}
            Leave="transition ease-in duration-100"
            LeaveFrom="opacity-100"
            LeaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Option>{}</Combobox.Option>
          </Transition>
        </div>
      </Combobox>
    </div>
  );
};

export default SearchManufacture;
