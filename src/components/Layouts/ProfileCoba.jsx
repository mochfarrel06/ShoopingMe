import {UserIcon} from "@heroicons/react/20/solid";

export default function ProfileCoba() {
  return (
    <div className="px-6 py-14 max-[400px]:px-5 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-2xl py-20 overflow-hidden lg:max-w-7xl lg:px-8">
        <div className="flex flex-col gap-2">
          <div>
            <h1 className="font-bold text-3xl tracking-wide">Profile</h1>
          </div>
          <div className="flex gap-10">
            <div className="px-10 py-10 border-2">
              <UserIcon className="h-10 w-10" />
            </div>
            <div>
              <div>
                <h3>Change your personal data</h3>
              </div>
              <div>
                <div>
                  <h4>Name</h4>
                  <p>John doe</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
