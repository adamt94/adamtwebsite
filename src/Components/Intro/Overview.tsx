import profileImage from "../../images/profile-image.jpg";

export default function Overview() {
  return (
    <div className="grid  sm:grid-cols-2 items-center justify-items-center">
      <div id="about" className=" w-full sm:w-2/3 text-left">
        <h1 className="display-large font-bol on-surface-text">Hi, I'm Adam</h1>
        <p className="title-large on-surface-variant-text">
          Software engineer bulding interesting things for the web. Currently
          working at <span className="primary-text">Smart Pension.</span>
        </p>
      </div>
      <div className="hidden sm:block">
        <img
          src={profileImage}
          width={400}
          className="border-4 border-secondary rounded-full"
        />
      </div>
    </div>
  );
}
