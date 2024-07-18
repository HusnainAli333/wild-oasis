import Spinner from "@/app/_components/Spinner";

function Loading() {
  return (
    <div className="gird items-center justify-center">
      <Spinner />
      {/* <p className=" text-xl text-primary-200">
        loading cabin data
      </p> */}
    </div>
  );
}

export default Loading;
