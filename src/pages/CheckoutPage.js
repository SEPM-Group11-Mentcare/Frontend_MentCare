import React from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import InputForm from "../components/common/InputForm";
import Button from "../components/common/Button";
import Box from "../components/common/Box";
import Text from "../components/common/Text";
import Checkbox from "../components/common/Checkbox";
import { Controller, useForm } from "react-hook-form";
import CheckoutCard from "../components/Checkout/CheckoutCard";

function CheckoutPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (d) => {
    console.log(d);
  };
  return (
    <ContentLayout title={"Checkout"}>
      <div className="flex flex-row gap-8 bg-white px-8 py-8 rounded-md border-[#F0F0F0] border-[1px] border-solid">
        <div className="w-4/6">
          <Text variant="text-lg" weight="semibold" className="text-center">
            Checkout
          </Text>
          <form className="flex-col flex gap-6">
            <div>
              <Controller
                name="notes"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <InputForm
                    type="text"
                    label="Notes"
                    name="notes"
                    value={field.value}
                    placeholder={"Write some notes for your doctors..."}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                )}
              />
            </div>
            <Button onClick={handleSubmit(onSubmit)}>
              Confirm and Checkout
            </Button>
          </form>
        </div>
        <div className="w-2/6">
          <CheckoutCard
            doctorName="Ha Anh"
            doctorExperience="20"
            date="16 Nov 2023"
            time="10:00 AM"
            consultingFee="100"
            bookingFee="10"
            videoCallFee="50"
            totalFee="160"
          />
        </div>
      </div>
    </ContentLayout>
  );
}

export default CheckoutPage;
