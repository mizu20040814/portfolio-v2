import { profile, getAge } from "@/data/profile";

// About（Home と /about）で使う所属・年齢・出身の3行
export default function ProfileSummary() {
    return (
        <p className="pt-6">
            {profile.university} {profile.faculty}
            <br />
            {profile.department} ({profile.grade})
            <br />
            {getAge(profile.birthDate)} years old, born in {profile.hometown},
            now living in {profile.currentCity}
        </p>
    );
}
