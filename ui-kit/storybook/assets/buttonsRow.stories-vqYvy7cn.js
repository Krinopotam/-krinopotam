import{j as o}from"./extends-CKwpSh1k.js";import{B as f,a as rt}from"./buttonsRow-C9xXyeYk.js";import{R as it}from"./MenuOutlined-DbxqBojV.js";import"./index-CTjT7uj6.js";import"./button-kgyvjgcI.js";import"./compact-item-B2r7eKHn.js";import"./useToken-DuQNFAH6.js";import"./index-Boe84S0F.js";import"./assertThisInitialized-C7eLZ5Vw.js";import"./button-dqH3xn1c.js";import"./index-C1vctpir.js";import"./Sider-C8lbNVsG.js";import"./index-56GSrRrr.js";import"./motion-D1Ok7SUs.js";import"./KeyCode-DNlgD2sM.js";import"./row-Bz4KYDPc.js";import"./motion-4S5rSXvC.js";import"./roundedArrow-CdZeBiH2.js";import"./zoom-DgLa7ZOz.js";import"./colors-DKxxPweQ.js";import"./DownOutlined-dRo7eB-m.js";import"./helpersObjects-NFjaQN06.js";import"./index-DGqZ_Opy.js";import"./_commonjs-dynamic-modules-TDtrdbi3.js";import"./helpersString-BLksZHLM.js";import"./v4-CQkTLCs1.js";const Lt={title:"Controls/ButtonsRow",component:f,tags:["autodocs"],parameters:{docs:{}}},t=(n,st)=>alert(st.title+" has clicked"),e={args:{buttons:{ok:{title:"OK",active:!0,position:"left"},cancel:{title:"Cancel",position:"left"}}}},r={args:{buttons:{ok:{title:"OK",active:!0,position:"center"},cancel:{title:"Cancel",position:"center"}}}},s={args:{buttons:{ok:{title:"OK",active:!0,position:"right"},cancel:{title:"Cancel",position:"right"}}}},i={args:{buttons:{ok:{title:"OK",position:"left",loading:!0},cancel:{title:"Cancel",position:"left"}}}},a={args:{buttons:{ok:{title:"OK",position:"left",tooltip:" This is a OK button"},cancel:{title:"Cancel",position:"left",tooltip:" This is a Cancel button"}}}},B={button1:{title:"Button1",position:"left",active:!0,onClick:t},button2:{title:"Button2",position:"left",active:!0,colorType:"warning",onClick:t},button3:{title:"Button3",position:"left",active:!0,colorType:"success",onClick:t},button4:{title:"Button4",position:"left",active:!0,colorType:"danger",onClick:t},button5:{title:"Button5",position:"left",ghost:!0,onClick:t},divider2:{position:"left",type:"divider"},link1:{title:"Link1",position:"left",type:"link",href:"https://www.ya.ru",target:"_blank"},text1:{title:"Text1",position:"left",type:"text",onClick:t},button6:{title:"Button6",position:"left",colorType:"warning",onClick:t},button7:{title:"Button7",position:"left",colorType:"success",onClick:t},button8:{title:"Button8",position:"left",colorType:"danger",onClick:t},button9:{title:"Button9",position:"center",dashed:!0,onClick:t},button10:{title:"Button10",position:"center",disabled:!0,onClick:t},button11:{title:"Button11",position:"right",loading:!0,onClick:t},button12:{title:"Button12",position:"right",onClick:t},custom:{title:o.jsxs("div",{style:{border:"1px solid green",padding:4},children:[o.jsx("b",{children:"Custom"})," Element"]}),type:"element"}},k={group1:{title:"Group1",type:"group"},subButton1:{title:"Item1",children:{subButton1_1:{title:"SubItem 1",onClick:t},subButton1_2:{title:"SubItem 2",onClick:t}}},subButton2:{title:"Item2",onClick:t,children:{subButton2_1:{title:"SubItem 3",onClick:t},subButton2_2:{title:"SubItem 4",onClick:t}}},divider1:{type:"divider"},group2:{title:"Group2",type:"group"},subButton3:{title:"Link",type:"link",style:{textDecoration:"underline"},href:"https://ya.ru",target:"_blank"},subButton4:{title:o.jsx("b",{style:{color:"red"},children:"Item4"}),onClick:t}},l={args:{buttons:B}},c={args:{buttons:B,colorType:"danger"}},p={args:{buttons:B,arrowsSelection:!0,makeActivePrimary:!1},render:n=>o.jsxs(rt,{style:{padding:30,border:"solid 1px"},children:[o.jsx("p",{children:"Set focus here and press left/right arrows"}),o.jsx(f,{...n})]})},u={args:{buttons:B,arrowsSelection:!0},render:n=>o.jsxs(rt,{style:{padding:30,border:"solid 1px"},children:[o.jsx("p",{children:"Set focus here and press left/right arrows"}),o.jsx(f,{...n})]})},d={args:{buttons:{button1:{title:"Button1",position:"left",children:k}}}},m={args:{buttons:{button1:{position:"left",expandIcon:o.jsx(it,{}),children:k}}}},g={args:{buttons:{button1:{title:"Button1",position:"left",onClick:t,children:k}}}},b={args:{buttons:{link1:{title:"Link1",position:"left",type:"link",children:k}}}};var h,y,C;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(S=(x=r.parameters)==null?void 0:x.docs)==null?void 0:S.source}}};var T,v,I;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(I=(v=s.parameters)==null?void 0:v.docs)==null?void 0:I.source}}};var K,O,R;i.parameters={...i.parameters,docs:{...(K=i.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(R=(O=i.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};var D,j,L;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(A=l.parameters)==null?void 0:A.docs)==null?void 0:E.source}}};var W,P,M;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  args: {
    buttons: allTypesButtons,
    colorType: 'danger'
  }
}`,...(M=(P=c.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var G,H,q;p.parameters={...p.parameters,docs:{...(G=p.parameters)==null?void 0:G.docs,source:{originalSource:`{
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
}`,...(q=(H=p.parameters)==null?void 0:H.docs)==null?void 0:q.source}}};var z,F,J;u.parameters={...u.parameters,docs:{...(z=u.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(J=(F=u.parameters)==null?void 0:F.docs)==null?void 0:J.source}}};var N,Q,U;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(tt=($=g.parameters)==null?void 0:$.docs)==null?void 0:tt.source}}};var ot,nt,et;b.parameters={...b.parameters,docs:{...(ot=b.parameters)==null?void 0:ot.docs,source:{originalSource:`{
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
}`,...(et=(nt=b.parameters)==null?void 0:nt.docs)==null?void 0:et.source}}};const _t=["ButtonsLeft","ButtonsCenter","ButtonsRight","ButtonLoading","ButtonTooltips","ManyButtons","ButtonsError","ButtonsArrowKeys","ButtonsArrowKeysActivePrimary","DropdownButton","DropdownButtonIconOnly","DropdownButtonClickable","DropdownLink"];export{i as ButtonLoading,a as ButtonTooltips,p as ButtonsArrowKeys,u as ButtonsArrowKeysActivePrimary,r as ButtonsCenter,c as ButtonsError,e as ButtonsLeft,s as ButtonsRight,d as DropdownButton,g as DropdownButtonClickable,m as DropdownButtonIconOnly,b as DropdownLink,l as ManyButtons,_t as __namedExportsOrder,Lt as default};
