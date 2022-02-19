/* eslint-disable @next/next/no-img-element */
import React, { ChangeEvent, useState, useRef } from "react";

export default function InputUpload() {
  const [fileImage, setFileImage] = useState<any[]>([]);
  const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file)
      );
      setFileImage((prevImage) => prevImage.concat(fileArray));
    }
  };
  const inputRef = useRef<HTMLInputElement | null>(null);
  const handleClickRef = () => inputRef.current?.click();

  return (
    <div
      style={{
        width: "90%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          cursor: "pointer",
          backgroundColor: "#2490ff",
          padding: "5px",
          borderRadius: "5px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <input
          type={"file"}
          multiple
          hidden
          name="Upload"
          accept="image/*"
          ref={(e) => {
            inputRef.current = e;
          }}
          onChange={handleImage}
        />
        <img
          src="https://www.minhaconexao.com.br/blog/wp-content/uploads/2017/04/upload.png"
          alt="upload"
          style={{ width: "40px", marginRight: "5px" }}
          onClick={handleClickRef}
        />
        <h3 onClick={handleClickRef}>Upload</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "70%",
        }}
      >
        {fileImage &&
          fileImage.map((img) => (
            <div key={img} style={{ display: "flex", flexDirection: "column" }}>
              <img
                src={img}
                alt=""
                style={{ width: "200px", height: "200px", margin: "5px" }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/6821/6821191.png"
                  alt=""
                  style={{
                    width: "17px",
                    height: "17px",
                    cursor: "pointer",
                  }}
                  
                />
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}
