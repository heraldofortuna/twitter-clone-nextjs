import Link from "next/link";

const Timeline = () => {
  return (
    <>
      <h1>This is the timeline</h1>
      <Link href="/">Go Home</Link>
      <style jsx>{`
        h1 {
          font-size: 36px;
          color: red;
        }
      `}</style>
    </>
  );
};

export default Timeline;
