import InputForm from '../common/InputForm'
import Button from "../common/Button";
import { useForm, Controller } from 'react-hook-form';
import { CameraIcon } from "@heroicons/react/24/outline";
import { updatePatientProfile } from '../../services/patient';
import { useEffect } from 'react';

function PatientProfileForm({ profile }) {
    const { control, handleSubmit, setValue, watch } = useForm();

    const onSubmit = async (data) => {
        try {
            const updatedProfile = await updatePatientProfile(data);
            console.log(updatedProfile);
        }
        catch (err) {
            console.error('Error updating profile: ', err);
        }
    };

    useEffect(() => {
        if (profile) {
            setValue({
                name: profile.name || '',
                username: profile.username || '',
                dob: profile.dob || ''
            })
        }
    }, [profile, setValue]);

    // Handle avatar change
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];

        // Read the image file as URL
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setValue('avatar', reader.result);
            };
            reader.readAsDataURL(file);
        }
    }

    const handleChooseAvatar = () => {
        document.getElementById('avatarInput').click();
    }


    return (
        <div className="bg-white w-full h-full rounded-md px-24  py-10">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="flex gap-10">
                    <div className="flex flex-col gap-5">
                        {/* Avatar */}
                        <div className="avatar pt-3">
                            <div className="w-60 rounded">
                                <img src={"https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"}
                                    alt='Avatar' />
                            </div>
                        </div>
                        {/* Option button */}
                        <div className="flex flex-col gap-3">
                            <Button variant='primaryOutline' onClick={handleChooseAvatar}>
                                <CameraIcon className="h-5 w-5" />
                                Choose another avatar
                            </Button>
                            <Controller
                                name='avatar'
                                control={control}
                                defaultValue=""
                                render={({ field }) => (
                                    <InputForm
                                        id='avatarInput'
                                        {...field}
                                        type='file'
                                        accept='image/*'
                                        hidden='true'
                                        onChange={handleAvatarChange}>
                                    </InputForm>
                                )}
                            />
                        </div>

                    </div>
                    {/* User information */}
                    <div className='w-full'>
                        <div>
                            <Controller
                                name='userId'
                                control={control}
                                defaultValue={profile._id || '345'}
                                render={({ field }) => (
                                    <InputForm label='User ID' value={field.value} className='w-lg' readOnly='true' {...field} ></InputForm>
                                )}
                            />

                            <Controller
                                name='username'
                                control={control}
                                defaultValue={profile.username || 'xian'}
                                render={({ field }) => (
                                    <InputForm label='Username' size='md' value={field.value} {...field}></InputForm>
                                )}
                            />
                        </div>
                        <div>
                            <Controller
                                name='name'
                                control={control}
                                defaultValue={profile.name || "Nguyen Tran Ha Anh"}
                                render={({ field }) => (
                                    <InputForm label='Name' size='md' value={field.value} {...field}></InputForm>
                                )}
                            />
                            <Controller
                                name='dob'
                                control={control}
                                defaultValue={profile.dob || '2003-07-18'}
                                render={({ field }) => (
                                    <InputForm type='date' label='Date of Birth' size='md' value={field.value} {...field}></InputForm>
                                )}
                            />
                        </div>
                        <div className="mt-5 flex justify-end gap-1">
                            <Button size='lg' variant='red' type='reset'>
                                Reset
                            </Button>
                            <Button size='lg' type='submit'>
                                Save
                            </Button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default PatientProfileForm;