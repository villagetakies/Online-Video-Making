import React from 'react';
import "./TextEditor.css";
import { Editor } from 'react-draft-wysiwyg';
import '../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import left from "./Icons/align-left.svg";
import right from "./Icons/align-right.svg";
import center from "./Icons/align-center.svg";
import justify from "./Icons/align-justify.svg";
import {NativeSelect,FormControl} from '@material-ui/core'

import ColorPic from './ColorPic';
class TextEditor extends React.Component {

    render() {

        return (
        <div className="texteditor">
            <div className="texteditor-container">

                <div  className="text-editing-menu">
                        <h5>Text Properties</h5>
                        <Editor
                        toolbarClassName="demo-toolbar-absolute"
                        wrapperClassName="demo-wrapper"
                        editorClassName="demo-editor"
                            toolbar={{
                            options: ['fontFamily','fontSize','blockType','inline','colorPicker','textAlign'],
                                
                            fontSize: {
                                className: 'bordered-option-classname',
                            },
                            fontFamily: {
                                className: 'bordered-option-classname',
                            },
                            blockType: {
                                inDropdown: true,
                                options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
                                className: undefined,
                                component: undefined,
                                dropdownClassName: undefined,
                            },
                            inline: {
                                options: ['bold', 'italic', 'underline'],
                                bold: { className: 'bordered-option-classname' },
                                italic: { className: 'bordered-option-classname' },
                                underline: { className: 'bordered-option-classname' },
                            },
                            colorPicker: { component: ColorPic },
                            textAlign: {
                                inDropdown: false,
                                className: undefined,
                                component: undefined,
                                dropdownClassName: undefined,
                                options: ['left', 'center', 'right', 'justify'],
                                left: { icon: left, className: undefined },
                                center: { icon: center, className: undefined },
                                right: { icon: right, className: undefined },
                                justify: { icon: justify, className: undefined },
                            },
                       
                            }}
                        />

                        <div className="text-animations">
                                <h5>Text Animations</h5>
                                <FormControl>
                                    <NativeSelect >
                                    <option value="">Select Animation</option>
                                    <option value={1}>Slide in with Reveal</option>
                                    <option value={2}>Scale Down</option>
                                    <option value={3}>Fade</option>
                                    </NativeSelect>
                                </FormControl>
                        </div>
                </div>

               
                <div mode="light" className="sc-ihsSHl gTALdq sidebar-toggle-button">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-right" className="svg-inline--fa fa-chevron-right fa-w-10 " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                        <path fill="currentColor" d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"></path>
                    </svg>
                </div>

            </div>

        </div>
        );
    }
}

export default TextEditor;