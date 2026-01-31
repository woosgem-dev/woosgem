import{R as e}from"./index-D4H_InIO.js";import{D as t}from"./Divider-Ddy17Ooe.js";const L={title:"Components/Divider",component:t,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"]},variant:{control:"select",options:["solid","dashed"]},spacing:{control:"select",options:["none","sm","md","lg"]}}},i={render:()=>e.createElement("div",{style:{width:"300px"}},e.createElement(t,null))},r={render:()=>e.createElement("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"24px"}},e.createElement("div",null,e.createElement("div",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"}},"Solid"),e.createElement(t,{variant:"solid"})),e.createElement("div",null,e.createElement("div",{style:{marginBottom:"8px",fontSize:"14px",color:"#666"}},"Dashed"),e.createElement(t,{variant:"dashed"})))},n={render:()=>e.createElement("div",{style:{width:"300px",display:"flex",flexDirection:"column",gap:"24px"}},e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",color:"#666"}},"None"),e.createElement(t,{spacing:"none"}),e.createElement("div",{style:{fontSize:"14px",color:"#666"}},"Content")),e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",color:"#666"}},"Small"),e.createElement(t,{spacing:"sm"}),e.createElement("div",{style:{fontSize:"14px",color:"#666"}},"Content")),e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",color:"#666"}},"Medium"),e.createElement(t,{spacing:"md"}),e.createElement("div",{style:{fontSize:"14px",color:"#666"}},"Content")),e.createElement("div",null,e.createElement("div",{style:{fontSize:"14px",color:"#666"}},"Large"),e.createElement(t,{spacing:"lg"}),e.createElement("div",{style:{fontSize:"14px",color:"#666"}},"Content")))},o={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px",height:"100px"}},e.createElement("div",null,"Section 1"),e.createElement(t,{orientation:"vertical",spacing:"none"}),e.createElement("div",null,"Section 2"),e.createElement(t,{orientation:"vertical",spacing:"none"}),e.createElement("div",null,"Section 3"))},a={render:()=>e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"0",height:"100px"}},e.createElement("div",null,"Section 1"),e.createElement(t,{orientation:"vertical",spacing:"md"}),e.createElement("div",null,"Section 2"),e.createElement(t,{orientation:"vertical",spacing:"md"}),e.createElement("div",null,"Section 3"))},l={render:()=>e.createElement("div",{style:{width:"400px"}},e.createElement("h2",{style:{fontSize:"20px",fontWeight:600,marginBottom:"8px"}},"Section Title"),e.createElement("p",{style:{marginBottom:"16px",color:"#666"}},"This is some content in the first section. It demonstrates how dividers can be used to separate different parts of a page."),e.createElement(t,{spacing:"lg"}),e.createElement("h2",{style:{fontSize:"20px",fontWeight:600,marginBottom:"8px"}},"Another Section"),e.createElement("p",{style:{marginBottom:"16px",color:"#666"}},"Here's more content in a different section. The divider helps create visual separation."),e.createElement(t,{spacing:"lg",variant:"dashed"}),e.createElement("h2",{style:{fontSize:"20px",fontWeight:600,marginBottom:"8px"}},"Final Section"),e.createElement("p",{style:{color:"#666"}},"This is the last section, showing how multiple dividers can be used throughout content."))},s={render:()=>e.createElement("div",{style:{width:"300px",border:"1px solid #e5e5e5",borderRadius:"8px",padding:"16px"}},e.createElement("div",{style:{padding:"8px 0"}},"Item 1"),e.createElement(t,{spacing:"sm"}),e.createElement("div",{style:{padding:"8px 0"}},"Item 2"),e.createElement(t,{spacing:"sm"}),e.createElement("div",{style:{padding:"8px 0"}},"Item 3"),e.createElement(t,{spacing:"sm"}),e.createElement("div",{style:{padding:"8px 0"}},"Item 4"))};var d,c,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px'
  }}>\r
      <Divider />\r
    </div>
}`,...(p=(c=i.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var m,v,g;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <div>\r
        <div style={{
        marginBottom: '8px',
        fontSize: '14px',
        color: '#666'
      }}>Solid</div>\r
        <Divider variant="solid" />\r
      </div>\r
      <div>\r
        <div style={{
        marginBottom: '8px',
        fontSize: '14px',
        color: '#666'
      }}>Dashed</div>\r
        <Divider variant="dashed" />\r
      </div>\r
    </div>
}`,...(g=(v=r.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var x,h,y;n.parameters={...n.parameters,docs:{...(x=n.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    gap: '24px'
  }}>\r
      <div>\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>None</div>\r
        <Divider spacing="none" />\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Content</div>\r
      </div>\r
      <div>\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Small</div>\r
        <Divider spacing="sm" />\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Content</div>\r
      </div>\r
      <div>\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Medium</div>\r
        <Divider spacing="md" />\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Content</div>\r
      </div>\r
      <div>\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Large</div>\r
        <Divider spacing="lg" />\r
        <div style={{
        fontSize: '14px',
        color: '#666'
      }}>Content</div>\r
      </div>\r
    </div>
}`,...(y=(h=n.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var f,u,S;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    height: '100px'
  }}>\r
      <div>Section 1</div>\r
      <Divider orientation="vertical" spacing="none" />\r
      <div>Section 2</div>\r
      <Divider orientation="vertical" spacing="none" />\r
      <div>Section 3</div>\r
    </div>
}`,...(S=(u=o.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var E,z,D;a.parameters={...a.parameters,docs:{...(E=a.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    alignItems: 'center',
    gap: '0',
    height: '100px'
  }}>\r
      <div>Section 1</div>\r
      <Divider orientation="vertical" spacing="md" />\r
      <div>Section 2</div>\r
      <Divider orientation="vertical" spacing="md" />\r
      <div>Section 3</div>\r
    </div>
}`,...(D=(z=a.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var I,w,B;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '400px'
  }}>\r
      <h2 style={{
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '8px'
    }}>Section Title</h2>\r
      <p style={{
      marginBottom: '16px',
      color: '#666'
    }}>\r
        This is some content in the first section. It demonstrates how dividers can be used to separate different parts of a page.\r
      </p>\r
      <Divider spacing="lg" />\r
      <h2 style={{
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '8px'
    }}>Another Section</h2>\r
      <p style={{
      marginBottom: '16px',
      color: '#666'
    }}>\r
        Here's more content in a different section. The divider helps create visual separation.\r
      </p>\r
      <Divider spacing="lg" variant="dashed" />\r
      <h2 style={{
      fontSize: '20px',
      fontWeight: 600,
      marginBottom: '8px'
    }}>Final Section</h2>\r
      <p style={{
      color: '#666'
    }}>\r
        This is the last section, showing how multiple dividers can be used throughout content.\r
      </p>\r
    </div>
}`,...(B=(w=l.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var C,T,b;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <div style={{
    width: '300px',
    border: '1px solid #e5e5e5',
    borderRadius: '8px',
    padding: '16px'
  }}>\r
      <div style={{
      padding: '8px 0'
    }}>Item 1</div>\r
      <Divider spacing="sm" />\r
      <div style={{
      padding: '8px 0'
    }}>Item 2</div>\r
      <Divider spacing="sm" />\r
      <div style={{
      padding: '8px 0'
    }}>Item 3</div>\r
      <Divider spacing="sm" />\r
      <div style={{
      padding: '8px 0'
    }}>Item 4</div>\r
    </div>
}`,...(b=(T=s.parameters)==null?void 0:T.docs)==null?void 0:b.source}}};const R=["Default","Variants","Spacing","Vertical","VerticalWithSpacing","InContent","InList"];export{i as Default,l as InContent,s as InList,n as Spacing,r as Variants,o as Vertical,a as VerticalWithSpacing,R as __namedExportsOrder,L as default};
