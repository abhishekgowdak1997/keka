import React, { useState, useRef, useCallback } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';




const QuillEditor = ({ value, onChange, onClose,onSave,showButtons }) => {
  const [editorValue, setEditorValue] = useState(value);
  const editorRef = useRef(null);

  const handleChange = (value) => {
    setEditorValue(value);
    onChange(value);
  };

  const handleEditorClick = useCallback((e) => {
    e.stopPropagation();
  }, []);

  const handleSaveClick = () => {
    if (editorValue.length >= 20) {
      onSave(editorValue);
    }
  }; 

  const buttonStyle = {
    opacity: editorValue.length<12 ? 0.6 : 1,
  };

  return (
   
    <div onClick={handleEditorClick}>
      <ReactQuill
        ref={editorRef}
        value={editorValue}
        onChange={handleChange}
        theme="snow"
        style={{color:"#ffffff"}}
        placeholder='Enter your answer here'
      />
    {showButtons && (
        <>
          <button onClick={onClose} className='mt-2 closeEditor'>Close</button>
          <button
            className='mt-2 saveEditor ms-2'
            onClick={handleSaveClick}
            disabled={editorValue.length < 20}
            style={buttonStyle}
          >
            Save response
          </button>
        </>
      )}

     
       
        
   
    </div>
  );
};

export default QuillEditor;
