import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (20121cc)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,Image,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const enabledGestures={"LHGUBvGde":{"hover":true}};const cycleOrder=["LHGUBvGde"];const variantClassNames={"LHGUBvGde":"framer-v-op5lu8"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,layoutId,width,height,variant:outerVariant="LHGUBvGde",title:yYEzMwbrq="",subtitle:iDng7LbKF="",image:QZvxpo08M=new URL("assets/512/fPk8hYCDELRNSrGS54dTb1EiG4.png",import.meta.url).href,tap:KFZoiy0au,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"LHGUBvGde",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTapop5lu8=activeVariantCallback(async(...args)=>{if(KFZoiy0au){const res=await KFZoiy0au(...args);if(res===false)return false;}});const variantProps=React.useMemo(()=>({"LHGUBvGde-hover":{"LHGUBvGde":{"background":null},"sifo2BYCx":{"background":{"src":QZvxpo08M,"pixelWidth":3376,"pixelHeight":2240,"intrinsicWidth":3376,"intrinsicHeight":2240,"fit":"fill"}}}}),[QZvxpo08M]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const isDisplayed1=()=>{if(gestureVariant==="LHGUBvGde-hover")return false;return true;};const isDisplayed2=()=>{if(gestureVariant==="LHGUBvGde-hover")return false;return true;};const isDisplayed3=()=>{if(gestureVariant==="LHGUBvGde-hover")return true;return false;};const isDisplayed4=()=>{if(gestureVariant==="LHGUBvGde-hover")return true;return false;};const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-CXaET",classNames),style:{"display":"contents","pointerEvents":"auto"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"LHGUBvGde",className:cx("framer-op5lu8",className),style:{...style},background:null,"data-highlight":true,"data-framer-name":"Variant 1",onTap:onTapop5lu8,transition:transition,ref:ref,...addVariantProps("LHGUBvGde"),children:[/*#__PURE__*/ _jsx(Image,{layoutId:"sifo2BYCx",className:"framer-vqwg67",style:{"boxShadow":"0px 1px 5px 2px rgba(0,0,0,0.25)"},background:{"src":QZvxpo08M,"pixelWidth":3376,"pixelHeight":2240,"intrinsicWidth":3376,"intrinsicHeight":2240,"fit":"fill"},transition:transition,...addVariantProps("sifo2BYCx")}),isDisplayed1()&&/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Lato\", serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(64, 64, 64)","--framer-font-size":"16px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Lato-300"],layoutId:"S_Isgqx0K",className:"framer-1ofpz0z",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>​</span><br></div></div>",text:iDng7LbKF,transition:transition,...addVariantProps("S_Isgqx0K")}),isDisplayed2()&&/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Lato\", serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(64, 64, 64)","--framer-font-size":"18px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Lato-700"],layoutId:"TPtAY7r3b",className:"framer-1b5wmry",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>​</span><br></div></div>",text:yYEzMwbrq,transition:transition,...addVariantProps("TPtAY7r3b")}),isDisplayed3()&&/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Lato\", serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(64, 64, 64)","--framer-font-size":"16px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Lato-300"],layoutId:"cOSztQaoR",className:"framer-yvu5hh",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>​</span><br></div></div>",text:iDng7LbKF,transition:transition,...addVariantProps("cOSztQaoR")}),isDisplayed4()&&/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Lato\", serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(64, 64, 64)","--framer-font-size":"18px","--framer-letter-spacing":"0px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Lato-700"],layoutId:"G2TyEJ6Em",className:"framer-1xi7ikt",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>​</span><br></div></div>",text:yYEzMwbrq,transition:transition,...addVariantProps("G2TyEJ6Em")})]})})}));});const css=[".framer-CXaET [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}",".framer-CXaET * { box-sizing: border-box; }",".framer-CXaET .framer-op5lu8 { position: relative; cursor: pointer; overflow: visible; width: 110px; height: 149px; }",".framer-CXaET .framer-vqwg67 { position: absolute; overflow: visible; width: 86px; height: 105px; bottom: -4px; left: 0px; flex: none; }",".framer-CXaET .framer-1ofpz0z, .framer-CXaET .framer-yvu5hh { position: absolute; overflow: hidden; height: 26px; right: 0px; left: 0px; top: 25px; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-CXaET .framer-1b5wmry, .framer-CXaET .framer-1xi7ikt { position: absolute; overflow: hidden; height: 26px; right: 0px; left: 0px; top: 4px; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-CXaET.framer-v-op5lu8 .framer-op5lu8 { cursor: pointer; }",".framer-CXaET.framer-v-op5lu8.hover .framer-op5lu8 { width: 115px; height: 156px; }",".framer-CXaET.framer-v-op5lu8.hover .framer-vqwg67 { width: 89px; height: auto; right: auto; bottom: -13px; left: 0px; top: auto; flex: none; aspect-ratio: 0.819047619047619 / 1; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 149
 * @framerIntrinsicWidth 110
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}, "Mf6tFJA0E": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"yYEzMwbrq": "title", "iDng7LbKF": "subtitle", "QZvxpo08M": "image", "KFZoiy0au": "tap"}
 */ const FramerlelCMgVTC=withCSS(Component,css);export default FramerlelCMgVTC;FramerlelCMgVTC.displayName="PicturePreview";FramerlelCMgVTC.defaultProps={"width":110,"height":149};addPropertyControls(FramerlelCMgVTC,{"yYEzMwbrq":{"type":ControlType.String,"title":"Title","defaultValue":"","placeholder":"title","displayTextArea":false},"iDng7LbKF":{"type":ControlType.String,"title":"Subtitle","defaultValue":"","placeholder":"subtitle","displayTextArea":false},"QZvxpo08M":{"type":ControlType.Image,"title":"Image","__defaultAssetReference":"data:framer/asset-reference,fPk8hYCDELRNSrGS54dTb1EiG4.png?originalFilename=underExposeOverDevfoma100008-instagram.png&preferredSize=small"},"KFZoiy0au":{"type":ControlType.EventHandler,"title":"Tap"}});addFonts(FramerlelCMgVTC,[{"url":"https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh7USew-FGC_p9dw.ttf","family":"Lato","style":"normal","weight":"300","moduleAsset":{"url":"https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh7USew-FGC_p9dw.ttf","localModuleIdentifier":"local-module:canvasComponent/lelCMgVTC:default"}},{"url":"https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh6UVew-FGC_p9dw.ttf","family":"Lato","style":"normal","weight":"700","moduleAsset":{"url":"https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh6UVew-FGC_p9dw.ttf","localModuleIdentifier":"local-module:canvasComponent/lelCMgVTC:default"}}]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerlelCMgVTC","slots":[],"annotations":{"framerIntrinsicWidth":"110","framerContractVersion":"1","framerIntrinsicHeight":"149","framerVariables":"{\"yYEzMwbrq\": \"title\", \"iDng7LbKF\": \"subtitle\", \"QZvxpo08M\": \"image\", \"KFZoiy0au\": \"tap\"}","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}, \"Mf6tFJA0E\": {\"layout\": [\"fixed\", \"fixed\"]}}}"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./lelCMgVTC.map