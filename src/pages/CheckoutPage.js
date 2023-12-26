import React from "react";
import ContentLayout from "../components/Layout/ContentLayout";
import InputForm from "../components/common/InputForm";
import Button from "../components/common/Button";
import Box from "../components/common/Box";
import Text from "../components/common/Text";
import Checkbox from "../components/common/Checkbox";
import { Controller, useForm } from "react-hook-form";

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
      <div>Checkout</div>
      {/* <div>
        <Text variant="text-2xl" weight="semibold" className="text-center">
          Checkout
        </Text>
        <form className="flex-col flex gap-6">
          <div>
            <Checkbox name="cash" label="Pay with Cash" control={control} />
          </div>

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

          <Button onClick={handleSubmit(onSubmit)}>Confirm and Pay</Button>
        </form>
      </div> */}
    </ContentLayout>
  );
}

export default CheckoutPage;
