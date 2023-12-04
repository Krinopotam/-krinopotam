import{j as n}from"./useToken-268f632d.js";import{B as f,a as rt}from"./buttonsRow-300bee12.js";import{M as it}from"./MenuOutlined-207c5478.js";import"./index-5819ae2c.js";import"./_commonjsHelpers-de833af9.js";import"./button-83f0aeae.js";import"./compact-item-e0eb0d02.js";import"./isNativeReflectConstruct-2f1897fe.js";import"./button-a395f6e7.js";import"./index-e0a25a8d.js";import"./Sider-f270e7a7.js";import"./index-53e6b65f.js";import"./useZIndex-9f7c196b.js";import"./KeyCode-6413d982.js";import"./row-353874ab.js";import"./motion-3729e44c.js";import"./roundedArrow-cf08b32b.js";import"./zoom-f1d5320d.js";import"./colors-dae18b42.js";import"./PurePanel-a66be90d.js";import"./DownOutlined-7d62f4d3.js";import"./index-092ccb3f.js";import"./_commonjs-dynamic-modules-302442b1.js";import"./helpersString-59da762c.js";import"./v4-4a60fe23.js";const jt={title:"Controls/ButtonsRow",component:f,tags:["autodocs"],parameters:{docs:{}}},t=(o,st)=>alert(st.title+" has clicked"),e={args:{buttons:{ok:{title:"OK",active:!0,position:"left"},cancel:{title:"Cancel",position:"left"}}}},r={args:{buttons:{ok:{title:"OK",active:!0,position:"center"},cancel:{title:"Cancel",position:"center"}}}},s={args:{buttons:{ok:{title:"OK",active:!0,position:"right"},cancel:{title:"Cancel",position:"right"}}}},i={args:{buttons:{ok:{title:"OK",position:"left",loading:!0},cancel:{title:"Cancel",position:"left"}}}},a={args:{buttons:{ok:{title:"OK",position:"left",tooltip:" This is a OK button"},cancel:{title:"Cancel",position:"left",tooltip:" This is a Cancel button"}}}},B={button1:{title:"Button1",position:"left",active:!0,onClick:t},button2:{title:"Button2",position:"left",active:!0,colorType:"warning",onClick:t},button3:{title:"Button3",position:"left",active:!0,colorType:"success",onClick:t},button4:{title:"Button4",position:"left",active:!0,colorType:"danger",onClick:t},button5:{title:"Button5",position:"left",ghost:!0,onClick:t},divider2:{position:"left",type:"divider"},link1:{title:"Link1",position:"left",type:"link",href:"https://www.ya.ru",target:"_blank"},text1:{title:"Text1",position:"left",type:"text",onClick:t},button6:{title:"Button6",position:"left",colorType:"warning",onClick:t},button7:{title:"Button7",position:"left",colorType:"success",onClick:t},button8:{title:"Button8",position:"left",colorType:"danger",onClick:t},button9:{title:"Button9",position:"center",dashed:!0,onClick:t},button10:{title:"Button10",position:"center",disabled:!0,onClick:t},button11:{title:"Button11",position:"right",loading:!0,onClick:t},button12:{title:"Button12",position:"right",onClick:t},custom:{title:n.jsxs("div",{style:{border:"1px solid green",padding:4},children:[n.jsx("b",{children:"Custom"})," Element"]}),type:"element"}},k={group1:{title:"Group1",type:"group"},subButton1:{title:"Item1",children:{subButton1_1:{title:"SubItem 1",onClick:t},subButton1_2:{title:"SubItem 2",onClick:t}}},subButton2:{title:"Item2",onClick:t,children:{subButton2_1:{title:"SubItem 3",onClick:t},subButton2_2:{title:"SubItem 4",onClick:t}}},divider1:{type:"divider"},group2:{title:"Group2",type:"group"},subButton3:{title:"Link",type:"link",style:{textDecoration:"underline"},href:"https://ya.ru",target:"_blank"},subButton4:{title:n.jsx("b",{style:{color:"red"},children:"Item4"}),onClick:t}},l={args:{buttons:B}},c={args:{buttons:B,colorType:"danger"}},u={args:{buttons:B,arrowsSelection:!0,makeActivePrimary:!1},render:o=>n.jsxs(rt,{style:{padding:30,border:"solid 1px"},children:[n.jsx("p",{children:"Set focus here and press left/right arrows"}),n.jsx(f,{...o})]})},p={args:{buttons:B,arrowsSelection:!0},render:o=>n.jsxs(rt,{style:{padding:30,border:"solid 1px"},children:[n.jsx("p",{children:"Set focus here and press left/right arrows"}),n.jsx(f,{...o})]})},d={args:{buttons:{button1:{title:"Button1",position:"left",children:k}}}},m={args:{buttons:{button1:{position:"left",expandIcon:n.jsx(it,{}),children:k}}}},g={args:{buttons:{button1:{title:"Button1",position:"left",onClick:t,children:k}}}},b={args:{buttons:{link1:{title:"Link1",position:"left",type:"link",children:k}}}};var h,y,C;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    buttons: {
      ok: {
        title: 'OK',
        active: true,
        position: 'left'
      },
      cancel: {
        title: 'Cancel',
        position: 'left'
      }
    }
  }
}`,...(C=(y=e.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var w,x,S;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    buttons: {
      ok: {
        title: 'OK',
        active: true,
        position: 'center'
      },
      cancel: {
        title: 'Cancel',
        position: 'center'
      }
    }
  }
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,v,O;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    buttons: {
      ok: {
        title: 'OK',
        active: true,
        position: 'right'
      },
      cancel: {
        title: 'Cancel',
        position: 'right'
      }
    }
  }
}`,...(O=(v=s.parameters)==null?void 0:v.docs)==null?void 0:O.source}}};var I,K,D;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    buttons: {
      ok: {
        title: 'OK',
        position: 'left',
        loading: true
      },
      cancel: {
        title: 'Cancel',
        position: 'left'
      }
    }
  }
}`,...(D=(K=i.parameters)==null?void 0:K.docs)==null?void 0:D.source}}};var R,j,L;a.parameters={...a.parameters,docs:{...(R=a.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    buttons: {
      ok: {
        title: 'OK',
        position: 'left',
        tooltip: ' This is a OK button'
      },
      cancel: {
        title: 'Cancel',
        position: 'left',
        tooltip: ' This is a Cancel button'
      }
    }
  }
}`,...(L=(j=a.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};var _,A,E;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    buttons: allTypesButtons
  }
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var M,W,P;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    buttons: allTypesButtons,
    colorType: 'danger'
  }
}`,...(P=(W=c.parameters)==null?void 0:W.docs)==null?void 0:P.source}}};var G,H,q;u.parameters={...u.parameters,docs:{...(G=u.parameters)==null?void 0:G.docs,source:{originalSource:`{
  args: {
    buttons: allTypesButtons,
    arrowsSelection: true,
    makeActivePrimary: false
  },
  render: args => {
    return <ButtonsRowWrapper style={{
      padding: 30,
      border: 'solid 1px'
    }}>\r
                <p>Set focus here and press left/right arrows</p>\r
                <ButtonsRow {...args} />\r
            </ButtonsRowWrapper>;
  }
}`,...(q=(H=u.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var z,F,J;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    buttons: allTypesButtons,
    arrowsSelection: true
  },
  render: args => {
    return <ButtonsRowWrapper style={{
      padding: 30,
      border: 'solid 1px'
    }}>\r
                <p>Set focus here and press left/right arrows</p>\r
                <ButtonsRow {...args} />\r
            </ButtonsRowWrapper>;
  }
}`,...(J=(F=p.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var N,Q,U;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    buttons: {
      button1: {
        title: 'Button1',
        position: 'left',
        children: dropDownItems
      }
    }
  }
}`,...(U=(Q=d.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,X,Y;m.parameters={...m.parameters,docs:{...(V=m.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    buttons: {
      button1: {
        //title: '',
        position: 'left',
        expandIcon: <MenuOutlined />,
        children: dropDownItems
      }
    }
  }
}`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,tt;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    buttons: {
      button1: {
        title: 'Button1',
        position: 'left',
        onClick: onClickHandler,
        children: dropDownItems
      }
    }
  }
}`,...(tt=($=g.parameters)==null?void 0:$.docs)==null?void 0:tt.source}}};var nt,ot,et;b.parameters={...b.parameters,docs:{...(nt=b.parameters)==null?void 0:nt.docs,source:{originalSource:`{
  args: {
    buttons: {
      link1: {
        title: 'Link1',
        position: 'left',
        type: 'link',
        children: dropDownItems
      }
    }
  }
}`,...(et=(ot=b.parameters)==null?void 0:ot.docs)==null?void 0:et.source}}};const Lt=["ButtonsLeft","ButtonsCenter","ButtonsRight","ButtonLoading","ButtonTooltips","ManyButtons","ButtonsError","ButtonsArrowKeys","ButtonsArrowKeysActivePrimary","DropdownButton","DropdownButtonIconOnly","DropdownButtonClickable","DropdownLink"];export{i as ButtonLoading,a as ButtonTooltips,u as ButtonsArrowKeys,p as ButtonsArrowKeysActivePrimary,r as ButtonsCenter,c as ButtonsError,e as ButtonsLeft,s as ButtonsRight,d as DropdownButton,g as DropdownButtonClickable,m as DropdownButtonIconOnly,b as DropdownLink,l as ManyButtons,Lt as __namedExportsOrder,jt as default};
//# sourceMappingURL=buttonsRow.stories-83285f76.js.map
