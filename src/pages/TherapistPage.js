import {
  ArrowDownIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import React, { useState } from "react";
import Text from "../components/common/Text";
import ContentLayout from "../components/Layout/ContentLayout";
import DoctorCard from "../components/Therapists/DoctorCard";
import { cn } from "../utils/cn";

const TherapistPage = () => {
  const [sort, setSort] = useState("Newest");
  const onChange = (e) => {
    setSort(e.target.value);
  };
  return (
    <ContentLayout title="Therapists">
      <div className="bg-white w-full h-full rounded-md py-4 px-10 flex flex-col gap-6">
        {/* Title */}

        {/* Actions */}
        <div className="flex flex-row items-center justify-between">
          <span className="text-2xl mb-2 font-semibold">Doctors</span>

          <div className="flex flex-row items-center">
            <div className="join mr-2">
              <button className="btn btn-square join-item rounded-md bg-[#F9FBFF] border-none">
                <MagnifyingGlassIcon className="mx-2 my-2" />
              </button>
              <input
                type="text"
                placeholder="Search"
                className="input input-bordered w-full max-w-xs join-item bg-[#F9FBFF] rounded-md border-none focus:outline-none text-sm"
              />
            </div>
            <div className="dropdown dropdown-bottom dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn bg-[#F9FBFF] border-none"
              >
                <Text className="text-gray-400" variant="text-sm">
                  Sort by:{" "}
                </Text>
                <Text variant="text=sm" weight="semibold">
                  {sort}
                </Text>
                <ChevronDownIcon className="w-4 h-4" />
              </div>
              <div
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-40"
              >
                <div className="flex flex-col gap-1">
                  <label
                    className={cn(
                      sort === "Newest" ? "bg-gray-200" : "",
                      "p-2 rounded-lg hover:bg-gray-200"
                    )}
                  >
                    <input
                      type="radio"
                      value="Newest"
                      checked={sort === "Newest"}
                      onChange={onChange}
                      className="hidden"
                    />

                    <Text>Newest</Text>
                  </label>

                  <label
                    className={cn(
                      sort === "Oldest" ? "bg-gray-200" : "",
                      "p-2 rounded-lg hover:bg-gray-200"
                    )}
                  >
                    <input
                      type="radio"
                      value="Oldest"
                      checked={sort === "Oldest"}
                      onChange={onChange}
                      className="hidden"
                    />

                    <Text>Oldest</Text>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-5 flex-col">
          <DoctorCard img="https://picsum.photos/200" name="John Doe" experience="20" availableToday={true} price="500000"/>
          <DoctorCard img="https://picsum.photos/200" name="John Doe" experience="20" availableToday={false} price="500000"/>
          <DoctorCard img="https://picsum.photos/200" name="John Doe" experience="20" availableToday={true} price="500000"/>
          <DoctorCard img="https://picsum.photos/200" name="John Doe" experience="20" availableToday={false} price="500000"/>
          <DoctorCard img="https://picsum.photos/200" name="John Doe" experience="20" availableToday={true} price="500000"/>

        </div>
      </div>
    </ContentLayout>
  );
};

export default TherapistPage;
