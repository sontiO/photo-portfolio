import{jsx as _jsx}from"react/jsx-runtime";// Generated by Framer (20121cc)
import*as React from"react";import{motion,LayoutGroup}from"framer-motion";import{useActiveVariantCallback,Image,addFonts,withCSS,addPropertyControls,ControlType,cx,useAddVariantProps,useVariantState,Stack}from"framer";import{useRandomID}from"https://framer.com/m/framer/randomID.js@^2.0.0";const enabledGestures={"LHGUBvGde":{"hover":true}};const cycleOrder=["LHGUBvGde"];const variantClassNames={"LHGUBvGde":"framer-v-op5lu8"};const humanReadableVariantMap={};const transitions={"default":{"type":"spring","ease":[0.44,0,0.56,1],"duration":0.3,"delay":0,"stiffness":500,"damping":60,"mass":1}};const Component=/*#__PURE__*/ React.forwardRef(function({style,className,layoutId,width,height,variant:outerVariant="LHGUBvGde",image:QZvxpo08M=new URL("assets/512/fPk8hYCDELRNSrGS54dTb1EiG4.png",import.meta.url).href,tap:KFZoiy0au,...restProps},ref){const outerVariantId=humanReadableVariantMap[outerVariant];const variant=outerVariantId||outerVariant;const{variants,baseVariant,gestureVariant,classNames,transition,setVariant,setGestureState}=useVariantState({defaultVariant:"LHGUBvGde",variant,transitions,variantClassNames,enabledGestures,cycleOrder});const{activeVariantCallback,delay}=useActiveVariantCallback(baseVariant);const onTapop5lu8=activeVariantCallback(async(...args)=>{if(KFZoiy0au){const res=await KFZoiy0au(...args);if(res===false)return false;}});const variantProps=React.useMemo(()=>({"LHGUBvGde-hover":{"sifo2BYCx":{"background":{"src":QZvxpo08M,"pixelWidth":3376,"pixelHeight":2240,"intrinsicWidth":3376,"intrinsicHeight":2240,"fit":"fill"}}}}),[QZvxpo08M]);const addVariantProps=useAddVariantProps(baseVariant,gestureVariant,variantProps);const defaultLayoutId=useRandomID();return(/*#__PURE__*/ _jsx(LayoutGroup,{id:layoutId!==null&&layoutId!==void 0?layoutId:defaultLayoutId,children:/*#__PURE__*/ _jsx(motion.div,{initial:variant,animate:variants,onHoverStart:()=>setGestureState({isHovered:true}),onHoverEnd:()=>setGestureState({isHovered:false}),onTapStart:()=>setGestureState({isPressed:true}),onTap:()=>setGestureState({isPressed:false}),onTapCancel:()=>setGestureState({isPressed:false}),className:cx("framer-Do0FX",classNames),style:{"display":"contents","pointerEvents":"auto"},children:/*#__PURE__*/ _jsx(Stack,{...restProps,layoutId:"LHGUBvGde",className:cx("framer-op5lu8",className),style:{...style},background:null,direction:"vertical",distribution:"start",alignment:"center",gap:0,__fromCanvasComponent:true,__contentWrapperStyle:{"width":"auto","height":"auto","padding":"0px 0px 0px 0px"},center:false,"data-highlight":true,"data-framer-name":"Variant 1",onTap:onTapop5lu8,transition:transition,ref:ref,...addVariantProps("LHGUBvGde"),children:/*#__PURE__*/ _jsx(Image,{layoutId:"sifo2BYCx",className:"framer-vqwg67",style:{"boxShadow":"0px 1px 5px 2px rgba(0, 0, 0, 0.12)","WebkitFilter":"none","filter":"none"},background:{"src":QZvxpo08M,"pixelWidth":3376,"pixelHeight":2240,"intrinsicWidth":3376,"intrinsicHeight":2240,"fit":"fill"},transition:transition,...addVariantProps("sifo2BYCx"),variants:{"LHGUBvGde-hover":{"WebkitFilter":"none","filter":"none","boxShadow":"0px 1px 5px 2px rgba(0, 0, 0, 0.45)"}}})})})}));});const css=[".framer-Do0FX [data-border=\"true\"]::after { content: \"\"; border-width: var(--border-top-width, 0) var(--border-right-width, 0) var(--border-bottom-width, 0) var(--border-left-width, 0); border-color: var(--border-color, none); border-style: var(--border-style, none); width: 100%; height: 100%; position: absolute; box-sizing: border-box; left: 0; top: 0; border-radius: inherit; pointer-events: none;}",".framer-Do0FX * { box-sizing: border-box; }",".framer-Do0FX .framer-op5lu8 { position: relative; cursor: pointer; overflow: visible; width: min-content; height: min-content; }",".framer-Do0FX .framer-vqwg67 { position: relative; overflow: visible; width: 86px; height: 105px; flex: none; }",".framer-Do0FX.framer-v-op5lu8 .framer-op5lu8 { cursor: pointer; }",".framer-Do0FX.framer-v-op5lu8.hover .framer-vqwg67 { width: 86px; height: 105px; right: auto; bottom: auto; left: auto; top: auto; flex: none; aspect-ratio: unset; }"];/**
 * This is a generated Framer component.
 * @framerIntrinsicHeight 105
 * @framerIntrinsicWidth 86
 * @framerCanvasComponentVariantDetails {"propertyName": "variant", "data": {"default": {"layout": ["auto", "auto"]}, "UWe6fpZKm": {"layout": ["auto", "auto"]}}}
 * @framerVariables {"QZvxpo08M": "image", "KFZoiy0au": "tap"}
 */ const FramerlelCMgVTC=withCSS(Component,css);export default FramerlelCMgVTC;FramerlelCMgVTC.displayName="PicturePreview";FramerlelCMgVTC.defaultProps={"width":86,"height":105};addPropertyControls(FramerlelCMgVTC,{"QZvxpo08M":{"type":ControlType.Image,"title":"Image","__defaultAssetReference":"data:framer/asset-reference,fPk8hYCDELRNSrGS54dTb1EiG4.png?originalFilename=underExposeOverDevfoma100008-instagram.png&preferredSize=small"},"KFZoiy0au":{"type":ControlType.EventHandler,"title":"Tap"}});addFonts(FramerlelCMgVTC,[]);
export const __FramerMetadata__ = {"exports":{"Props":{"type":"tsType","annotations":{"framerContractVersion":"1"}},"default":{"type":"reactComponent","name":"FramerlelCMgVTC","slots":[],"annotations":{"framerIntrinsicHeight":"105","framerIntrinsicWidth":"86","framerContractVersion":"1","framerCanvasComponentVariantDetails":"{\"propertyName\": \"variant\", \"data\": {\"default\": {\"layout\": [\"auto\", \"auto\"]}, \"UWe6fpZKm\": {\"layout\": [\"auto\", \"auto\"]}}}","framerVariables":"{\"QZvxpo08M\": \"image\", \"KFZoiy0au\": \"tap\"}"}},"__FramerMetadata__":{"type":"variable"}}}
//# sourceMappingURL=./lelCMgVTC.map