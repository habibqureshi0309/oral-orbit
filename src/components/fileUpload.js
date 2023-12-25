import { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from "@/styles/main.module.css"
import Image from 'next/image';
import Text from './text';

const FileUpload = ({ onFileRemove }) => {
    const [uploadedFiles, setUploadedFiles] = useState([]);

    const onDrop = (acceptedFiles) => {
        const newFiles = acceptedFiles.map((file) => ({
            file,
            preview: URL.createObjectURL(file),
            size: file.size
        }));

        setUploadedFiles((prevFiles) => [...prevFiles, ...newFiles]);
    };

    const removeFile = (index) => {
        const updatedFiles = [...uploadedFiles];
        updatedFiles.splice(index, 1);
        setUploadedFiles(updatedFiles);
        if (onFileRemove) {
            onFileRemove(uploadedFiles[index]);
        }
    };

    const filesContainerStyle = {
        display: 'flex',
        marginTop: '20px',
        padding: '40px',
        borderRadius: '20px',
        border: uploadedFiles?.length ? '0.25px solid var(--Primary-Purple, lightgray)' : '0',
        background: uploadedFiles?.length ? '#F5F5FA' : '',
        boxShadow: uploadedFiles?.length ? '-10px -10px 20px 0px #FFF inset, 10px 5px 21px 0px rgba(170, 170, 204, 0.20) inset' : '',
        justifyContent: 'center'
    };

    const { getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <div>
            <div {...getRootProps()} style={dropzoneStyle}>
                <input {...getInputProps()} />
                <p>Upload your resume</p>
            </div>
            <div className={`${styles.textCenter} ${styles.mt30} ${styles.w40} ${styles.marginAuto} ${styles.displayBlock}`}>
                <Text text="You can either upload your resume here or use the information you have currently entered" />
            </div>
            <div style={filesContainerStyle} className={styles.mt30}>
                {uploadedFiles.map((file, index) => (
                    <div key={index} style={fileContainerStyle} className={styles.displayFlex}>
                        <Image
                            src="/assets/file.svg"
                            alt={`File ${index}`}
                            className={`${styles.filePreviewStyle} ${styles.marginAuto}`}
                            layout="fill"
                            priority
                        />
                        <div className={styles.ml10}>
                            <Text text={file?.preview} style={{ whiteSpace: 'nowrap', fontSize: '16px', lineHeight: '15px' }}/>
                            <Text text={`${file?.size}KB`} style={{fontSize: '12px', lineHeight: '12px'}}/>
                        </div>
                        {/* <button onClick={() => removeFile(index)}>Remove</button> */}
                    </div>
                ))}
            </div>
        </div>
    );
};

const dropzoneStyle = {
    border: '2px dashed #cccccc',
    borderRadius: '4px',
    padding: '20px',
    textAlign: 'center',
    cursor: 'pointer',
};

const fileContainerStyle = {
    marginRight: '10px',
};

export default FileUpload;
