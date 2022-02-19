import React, { ChangeEvent, useState } from "react";

export default function InputUpload() {
  const [fileImage, setFileImage] = useState<any[]>([]);
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setFileImage((prevImage) => prevImage.concat(fileArray))
    }
  };
  return (
    <>
      <div>oi</div>
    </>
  );
}
