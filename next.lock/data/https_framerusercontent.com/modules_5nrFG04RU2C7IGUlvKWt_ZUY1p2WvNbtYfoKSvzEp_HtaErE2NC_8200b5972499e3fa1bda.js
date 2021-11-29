import{jsx as _jsx,jsxs as _jsxs}from"react/jsx-runtime";// Generated by Framer (cbd47d7)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,Image,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Text,getFonts}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";import PicturePreview from"https://framerusercontent.com/modules/bBLuywifBG1ioAUFGNSq/LKRZKBES3So6UQtsGXaA/lelCMgVTC.js";import Test from"https://framerusercontent.com/modules/txU118V5Ur8p3Kkg6jm0/nKPJqtt8ekTBEs7RvBIU/mLiHd9x_1.js";const PicturePreviewFonts=getFonts(PicturePreview);const TestFonts=getFonts(Test);const cycleOrder=["Ls3tdWyUm"];const variantClassNames={"Ls3tdWyUm":"framer-v-w96fz6"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,layoutId,width,height,variant:outerVariant="Ls3tdWyUm",tap:mp7YXTU5u,date:ltwYTYWA4="May 2020",title:IADJGRVvD="Minolta X-570",image:EpnoKQAAs=new URL("assets/fPk8hYCDELRNSrGS54dTb1EiG4.png",import.meta.url).href,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"Ls3tdWyUm",variant,transitions,variantClassNames,cycleOrder});const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const tap1fb8n8=activeVariantCallback(async(...args)=>{if(mp7YXTU5u){const res=await mp7YXTU5u(...args);if(res===false)return false;}});const variantProps=React.useMemo(()=>({}),[]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-JNdk2",classNames),style:{"display":"contents"},children:/*#__PURE__*/ _jsxs(motion.div,{...restProps,layoutId:"Ls3tdWyUm",className:cx("framer-w96fz6",className),style:{"backgroundColor":"rgb(255, 255, 255)",...style},"data-framer-name":"Variant 1",transition:transition,ref:ref,...addVariantProps("Ls3tdWyUm"),children:[/*#__PURE__*/ _jsx(Image,{layoutId:"gsR4WuSeK",className:"framer-1dsdiiz",style:{},background:{"src":EpnoKQAAs,"pixelWidth":1129,"pixelHeight":1153,"intrinsicWidth":1129,"intrinsicHeight":1153,"fit":"fill"},transition:transition,...addVariantProps("gsR4WuSeK")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Lato\", serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(64, 64, 64)","--framer-font-size":"14px","--framer-letter-spacing":"-0.9px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Lato-300"],layoutId:"mZsmJpGOt",className:"framer-fbfxkt",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>May 2020</span><br></div></div>",text:ltwYTYWA4,transition:transition,...addVariantProps("mZsmJpGOt")}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Lato\", serif","--framer-font-style":"normal","--framer-font-weight":700,"--framer-text-color":"rgb(64, 64, 64)","--framer-font-size":"14px","--framer-letter-spacing":"-0.7px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Lato-700"],layoutId:"aEhGE7v9k",className:"framer-w72f1f",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>Minolta X-570</span><br></div></div>",text:IADJGRVvD,transition:transition,...addVariantProps("aEhGE7v9k")}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"pAoqPX_uo-container",className:"framer-xlevfk-container",transition:transition,...addVariantProps("pAoqPX_uo-container"),children:/*#__PURE__*/ _jsx(PicturePreview,{width:"100%",height:"100%",layoutId:"pAoqPX_uo",id:"pAoqPX_uo",title:"fomapan 100",subtitle:"more from roll:",image:new URL("assets/512/Cnx3dm9DtdjuX8i6jpucmrlJdg.png",import.meta.url).href,transition:transition,...addVariantProps("pAoqPX_uo")})}),/*#__PURE__*/ _jsx(motion.div,{style:{},layoutId:"g4DtHDRjH-container",className:"framer-1fb8n8-container",transition:transition,...addVariantProps("g4DtHDRjH-container"),children:/*#__PURE__*/ _jsx(Test,{width:"100%",height:"100%",layoutId:"g4DtHDRjH",id:"g4DtHDRjH",tap:tap1fb8n8,transition:transition,...addVariantProps("g4DtHDRjH")})}),/*#__PURE__*/ _jsx(Text,{style:{"--framer-font-family":"\"Lato\", serif","--framer-font-style":"normal","--framer-font-weight":300,"--framer-text-color":"rgb(64, 64, 64)","--framer-font-size":"16px","--framer-letter-spacing":"-0.7px","--framer-text-transform":"none","--framer-text-decoration":"none","--framer-line-height":"1.2em","--framer-text-alignment":"start","--framer-link-text-color":"rgb(0, 153, 255)","--framer-link-text-decoration":"underline"},withExternalLayout:true,verticalAlignment:"top",__fromCanvasComponent:true,fonts:["GF;Lato-300"],layoutId:"FWVLjnlXC",className:"framer-1lbxnlj",rawHTML:"<div style='font-size: 0; line-height: 0; tab-size: 4; white-space: inherit; word-wrap: inherit'><div style='direction: ltr; font-size: 0'><span style=''>back</span><br></div></div>",transition:transition,...addVariantProps("FWVLjnlXC")})]})})}));});const css=[".framer-JNdk2 [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}",".framer-JNdk2 * { box-sizing: border-box; }",".framer-JNdk2 .framer-w96fz6 { position: relative; overflow: hidden; width: 375px; height: 667px; }",".framer-JNdk2 .framer-1dsdiiz { position: absolute; overflow: visible; width: 375px; height: 497px; left: 0px; top: 0px; flex: none; }",".framer-JNdk2 .framer-fbfxkt { position: absolute; overflow: hidden; width: 166px; height: 49px; left: 28px; top: 508px; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-JNdk2 .framer-w72f1f { position: absolute; overflow: hidden; width: 110px; height: 26px; left: 28px; top: 526px; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }",".framer-JNdk2 .framer-xlevfk-container { position: absolute; width: auto; height: auto; right: 4px; bottom: 10px; flex: none; }",".framer-JNdk2 .framer-1fb8n8-container { position: absolute; width: auto; height: auto; bottom: 10px; left: 25px; flex: none; }",".framer-JNdk2 .framer-1lbxnlj { position: absolute; overflow: hidden; width: 110px; height: 26px; left: 44px; top: 639px; flex: none; white-space: pre-wrap; word-wrap: break-word; word-break: break-word; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 667
 * @framerIntrinsicWidth 375
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["fixed", "fixed"]}}}
 * @framerVariables {"mp7YXTU5u": "tap", "ltwYTYWA4": "date", "IADJGRVvD": "title", "EpnoKQAAs": "image"}
 */ const FramerHtaErE2NC=withCSS(Component,css);export default FramerHtaErE2NC;FramerHtaErE2NC.displayName="Modal";FramerHtaErE2NC.defaultProps={"width":375,"height":667};addPropertyControls(FramerHtaErE2NC,{"mp7YXTU5u":{"type":ControlType.EventHandler,"title":"Tap"},"ltwYTYWA4":{"type":ControlType.String,"title":"Date","defaultValue":"May 2020","displayTextArea":false},"IADJGRVvD":{"type":ControlType.String,"title":"Title","defaultValue":"Minolta X-570","displayTextArea":false},"EpnoKQAAs":{"type":ControlType.Image,"title":"Image","__defaultAssetReference":"data:framer/asset-reference,fPk8hYCDELRNSrGS54dTb1EiG4.png?originalFilename=underExposeOverDevfoma100008-instagram.png&preferredSize=large"}});addFonts(FramerHtaErE2NC,[{"url":"https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh7USew-FGC_p9dw.ttf","family":"Lato","style":"normal","weight":"300","moduleAsset":{"url":"https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh7USew-FGC_p9dw.ttf","localModuleIdentifier":"local-module:canvasComponent/HtaErE2NC:default"}},{"url":"https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh6UVew-FGC_p9dw.ttf","family":"Lato","style":"normal","weight":"700","moduleAsset":{"url":"https://fonts.gstatic.com/s/lato/v20/S6u9w4BMUTPHh6UVew-FGC_p9dw.ttf","localModuleIdentifier":"local-module:canvasComponent/HtaErE2NC:default"}},...PicturePreviewFonts,...TestFonts]);
export const __FramerMetadata__ = {"exports":{"default":{"type":"reactComponent","name":"FramerHtaErE2NC","slots":[],"annotations":{"framerIntrinsicWidth":"375","framerIntrinsicHeight":"667","framerVariables":"{\"mp7YXTU5u\": \"tap\", \"ltwYTYWA4\": \"date\", \"IADJGRVvD\": \"title\", \"EpnoKQAAs\": \"image\"}","framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"fixed\", \"fixed\"]}}}"}},"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./HtaErE2NC.map