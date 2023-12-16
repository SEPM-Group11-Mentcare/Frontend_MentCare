import ContentLayout from "../components/Layout/ContentLayout";
import InputForm from "../components/common/InputForm";
import Button from "../components/common/Button";
import { CameraIcon } from "@heroicons/react/24/outline";

function PatientProfile({ user }) {
    return (
        <ContentLayout title='My Profile'>
            <div className="bg-white w-full h-full rounded-md px-24  py-10">
                <div className="flex gap-10">
                    <div className="flex flex-col gap-5">
                        {/* Avatar */}
                        <div className="avatar pt-3">
                            <div className="w-60 rounded">
                                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </div>
                        {/* Option button */}
                        <div className="flex flex-col gap-3">
                            <Button variant='roundOutline'>
                                <CameraIcon className="h-5 w-5" />
                                Choose another avatar
                            </Button>
                            <div className="flex gap-1">
                                <Button size='lg'>
                                    Save
                                </Button>
                                <Button size='lg' variant='redButton'>
                                    Reset
                                </Button>
                            </div>
                        </div>

                    </div>
                    {/* User information */}
                    <div className="w-full">
                        <div>
                            <InputForm label='User ID' placeholder='#345' disabled='true' className='w-lg' ></InputForm>
                            <InputForm label='Username' size='md' placeholder='nana@1711'></InputForm>
                        </div>
                        <div>
                            <InputForm label='Name' size='md' placeholder='Anh'></InputForm>
                            <InputForm type='date' label='Date of Birth' size='md' value='2003-11-17'></InputForm>
                        </div>


                    </div>
                </div>
            </div>
        </ContentLayout>
    )
}

export default PatientProfile;