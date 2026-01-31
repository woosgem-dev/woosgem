import{R as e,r as A}from"./index-D4H_InIO.js";import{D as g,a as t,B as o,b as l,T as a,A as i}from"./Divider-Ddy17Ooe.js";const P={title:"Design System/Theme",parameters:{layout:"fullscreen",docs:{description:{component:`Theme showcase and switcher stories\r

Available themes:\r
- default (light theme)\r
- dark (dark theme)\r
- crypto (crypto-themed UI)`}}},tags:["autodocs"]},n=({theme:r})=>e.createElement("div",{"data-theme":r,style:{padding:"32px",minHeight:"400px",background:"var(--wg-color-bg-primary, #ffffff)",color:"var(--wg-color-text-primary, #000000)"}},e.createElement("h2",{style:{marginBottom:"8px",fontSize:"24px",fontWeight:600}},r.charAt(0).toUpperCase()+r.slice(1)," Theme"),e.createElement("p",{style:{marginBottom:"24px",color:"var(--wg-color-text-secondary, #666666)"}},"Preview of all components in ",r," theme"),e.createElement("div",{style:{marginBottom:"32px"}},e.createElement("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600}},"Buttons"),e.createElement("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},e.createElement(t,{variant:"filled",color:"primary"},"Primary"),e.createElement(t,{variant:"filled",color:"secondary"},"Secondary"),e.createElement(t,{variant:"filled",color:"danger"},"Danger"),e.createElement(t,{variant:"filled",color:"success"},"Success"),e.createElement(t,{variant:"outline",color:"primary"},"Outline"),e.createElement(t,{variant:"ghost",color:"primary"},"Ghost"))),e.createElement("div",{style:{marginBottom:"32px"}},e.createElement("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600}},"Badges"),e.createElement("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap",alignItems:"center"}},e.createElement(o,{color:"primary"},"Primary"),e.createElement(o,{color:"secondary"},"Secondary"),e.createElement(o,{color:"danger"},"Danger"),e.createElement(o,{color:"success"},"Success"),e.createElement(o,{color:"warning"},"Warning"),e.createElement(o,{color:"info"},"Info"))),e.createElement("div",{style:{marginBottom:"32px"}},e.createElement("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600}},"Inputs"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"400px"}},e.createElement(l,{variant:"outline",placeholder:"Outline input"}),e.createElement(l,{variant:"filled",placeholder:"Filled input"}),e.createElement(l,{variant:"underline",placeholder:"Underline input"}))),e.createElement("div",{style:{marginBottom:"32px"}},e.createElement("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600}},"Tabs"),e.createElement("div",{style:{display:"flex",gap:"8px"}},e.createElement(a,{variant:"underline",selected:!0},"Overview"),e.createElement(a,{variant:"underline"},"Activity"),e.createElement(a,{variant:"underline"},"Settings"))),e.createElement("div",{style:{marginBottom:"32px"}},e.createElement("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600}},"Avatars"),e.createElement("div",{style:{display:"flex",gap:"12px",alignItems:"center"}},e.createElement(i,{size:"sm",fallback:"SM"},"SM"),e.createElement(i,{size:"md",fallback:"MD"},"MD"),e.createElement(i,{size:"lg",fallback:"LG"},"LG"),e.createElement(i,{size:"lg",shape:"square",fallback:"SQ"},"SQ"))),e.createElement("div",null,e.createElement("h3",{style:{marginBottom:"12px",fontSize:"16px",fontWeight:600}},"Divider"),e.createElement(g,{spacing:"md"}))),c={render:()=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"0"}},e.createElement(n,{theme:"default"}),e.createElement(g,{spacing:"none"}),e.createElement(n,{theme:"dark"}),e.createElement(g,{spacing:"none"}),e.createElement(n,{theme:"crypto"}))},m={render:()=>{const[r,u]=A.useState("default");return e.createElement("div",{"data-theme":r,style:{padding:"32px",minHeight:"100vh",background:"var(--wg-color-bg-primary, #ffffff)",color:"var(--wg-color-text-primary, #000000)",transition:"background-color 0.3s ease, color 0.3s ease"}},e.createElement("div",{style:{maxWidth:"800px",margin:"0 auto"}},e.createElement("h1",{style:{marginBottom:"8px",fontSize:"32px",fontWeight:700}},"Theme Switcher Demo"),e.createElement("p",{style:{marginBottom:"24px",color:"var(--wg-color-text-secondary, #666666)"}},"Click the buttons below to switch between themes"),e.createElement("div",{style:{display:"flex",gap:"12px",marginBottom:"48px"}},e.createElement(t,{variant:r==="default"?"filled":"outline",color:"primary",onClick:()=>u("default")},"Default Theme"),e.createElement(t,{variant:r==="dark"?"filled":"outline",color:"primary",onClick:()=>u("dark")},"Dark Theme"),e.createElement(t,{variant:r==="crypto"?"filled":"outline",color:"primary",onClick:()=>u("crypto")},"Crypto Theme")),e.createElement("div",{style:{padding:"24px",borderRadius:"12px",background:"var(--wg-color-bg-secondary, #f5f5f5)",marginBottom:"32px"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"12px",marginBottom:"12px"}},e.createElement(o,{color:"primary",size:"lg"},"Current Theme: ",r)),e.createElement("p",{style:{color:"var(--wg-color-text-secondary, #666666)",marginBottom:"16px"}},"Themes are applied using the ",e.createElement("code",null,"data-theme")," attribute. All colors update automatically based on CSS custom properties."),e.createElement("code",{style:{display:"block",padding:"12px",background:"var(--wg-color-bg-primary, #ffffff)",borderRadius:"8px",fontSize:"14px",fontFamily:"monospace"}},`<div data-theme="${r}">...</div>`)),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"32px"}},e.createElement("div",null,e.createElement("h3",{style:{marginBottom:"16px",fontSize:"20px",fontWeight:600}},"Buttons"),e.createElement("div",{style:{display:"flex",gap:"12px",flexWrap:"wrap"}},e.createElement(t,{color:"primary"},"Primary"),e.createElement(t,{color:"secondary"},"Secondary"),e.createElement(t,{color:"danger"},"Danger"),e.createElement(t,{color:"success"},"Success"),e.createElement(t,{variant:"outline",color:"primary"},"Outline"),e.createElement(t,{variant:"ghost",color:"primary"},"Ghost"),e.createElement(t,{loading:!0},"Loading"),e.createElement(t,{disabled:!0},"Disabled"))),e.createElement("div",null,e.createElement("h3",{style:{marginBottom:"16px",fontSize:"20px",fontWeight:600}},"Form Elements"),e.createElement("div",{style:{display:"flex",flexDirection:"column",gap:"12px",maxWidth:"400px"}},e.createElement(l,{placeholder:"Enter your name"}),e.createElement(l,{variant:"filled",placeholder:"Enter your email"}),e.createElement(l,{variant:"underline",placeholder:"Enter your password",type:"password"}),e.createElement(l,{error:!0,placeholder:"Error state"}),e.createElement(l,{success:!0,placeholder:"Success state"}))),e.createElement("div",null,e.createElement("h3",{style:{marginBottom:"16px",fontSize:"20px",fontWeight:600}},"Tabs"),e.createElement("div",{style:{display:"flex",gap:"8px",marginBottom:"16px"}},e.createElement(a,{variant:"underline",selected:!0},"Overview"),e.createElement(a,{variant:"underline"},"Activity"),e.createElement(a,{variant:"underline"},"Analytics"),e.createElement(a,{variant:"underline",disabled:!0},"Reports")),e.createElement("div",{style:{display:"flex",gap:"8px"}},e.createElement(a,{variant:"filled",selected:!0},"All"),e.createElement(a,{variant:"filled"},"Active"),e.createElement(a,{variant:"filled"},"Archived"))),e.createElement("div",null,e.createElement("h3",{style:{marginBottom:"16px",fontSize:"20px",fontWeight:600}},"User Profile Card"),e.createElement("div",{style:{padding:"24px",borderRadius:"12px",background:"var(--wg-color-bg-secondary, #f5f5f5)",maxWidth:"400px"}},e.createElement("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginBottom:"16px"}},e.createElement(i,{size:"xl",fallback:"JD"},"JD"),e.createElement("div",null,e.createElement("h4",{style:{fontSize:"18px",fontWeight:600,marginBottom:"4px"}},"John Doe"),e.createElement("p",{style:{fontSize:"14px",color:"var(--wg-color-text-secondary, #666666)"}},"john.doe@example.com"))),e.createElement(g,{spacing:"md"}),e.createElement("div",{style:{display:"flex",gap:"8px",marginTop:"16px"}},e.createElement(o,{color:"success"},"Active"),e.createElement(o,{color:"primary"},"Premium"),e.createElement(o,{color:"info"},"Verified")))))))}},s={render:()=>e.createElement(n,{theme:"default"})},d={render:()=>e.createElement(n,{theme:"dark"})},p={render:()=>e.createElement(n,{theme:"crypto"})};var y,f,h;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'grid',
    gridTemplateColumns: '1fr',
    gap: '0'
  }}>\r
      <ThemeShowcase theme="default" />\r
      <Divider spacing="none" />\r
      <ThemeShowcase theme="dark" />\r
      <Divider spacing="none" />\r
      <ThemeShowcase theme="crypto" />\r
    </div>
}`,...(h=(f=c.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};var x,v,E;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => {
    const [theme, setTheme] = useState<'default' | 'dark' | 'crypto'>('default');
    return <div data-theme={theme} style={{
      padding: '32px',
      minHeight: '100vh',
      background: 'var(--wg-color-bg-primary, #ffffff)',
      color: 'var(--wg-color-text-primary, #000000)',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>\r
        <div style={{
        maxWidth: '800px',
        margin: '0 auto'
      }}>\r
          <h1 style={{
          marginBottom: '8px',
          fontSize: '32px',
          fontWeight: 700
        }}>\r
            Theme Switcher Demo\r
          </h1>\r
          <p style={{
          marginBottom: '24px',
          color: 'var(--wg-color-text-secondary, #666666)'
        }}>\r
            Click the buttons below to switch between themes\r
          </p>\r
\r
          {/* Theme Switcher Buttons */}\r
          <div style={{
          display: 'flex',
          gap: '12px',
          marginBottom: '48px'
        }}>\r
            <Button variant={theme === 'default' ? 'filled' : 'outline'} color="primary" onClick={() => setTheme('default')}>\r
              Default Theme\r
            </Button>\r
            <Button variant={theme === 'dark' ? 'filled' : 'outline'} color="primary" onClick={() => setTheme('dark')}>\r
              Dark Theme\r
            </Button>\r
            <Button variant={theme === 'crypto' ? 'filled' : 'outline'} color="primary" onClick={() => setTheme('crypto')}>\r
              Crypto Theme\r
            </Button>\r
          </div>\r
\r
          {/* Current Theme Info */}\r
          <div style={{
          padding: '24px',
          borderRadius: '12px',
          background: 'var(--wg-color-bg-secondary, #f5f5f5)',
          marginBottom: '32px'
        }}>\r
            <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginBottom: '12px'
          }}>\r
              <Badge color="primary" size="lg">\r
                Current Theme: {theme}\r
              </Badge>\r
            </div>\r
            <p style={{
            color: 'var(--wg-color-text-secondary, #666666)',
            marginBottom: '16px'
          }}>\r
              Themes are applied using the <code>data-theme</code> attribute. All colors update automatically\r
              based on CSS custom properties.\r
            </p>\r
            <code style={{
            display: 'block',
            padding: '12px',
            background: 'var(--wg-color-bg-primary, #ffffff)',
            borderRadius: '8px',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}>\r
              {\`<div data-theme="\${theme}">...</div>\`}\r
            </code>\r
          </div>\r
\r
          {/* Component Examples */}\r
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '32px'
        }}>\r
            {/* Buttons Section */}\r
            <div>\r
              <h3 style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: 600
            }}>\r
                Buttons\r
              </h3>\r
              <div style={{
              display: 'flex',
              gap: '12px',
              flexWrap: 'wrap'
            }}>\r
                <Button color="primary">Primary</Button>\r
                <Button color="secondary">Secondary</Button>\r
                <Button color="danger">Danger</Button>\r
                <Button color="success">Success</Button>\r
                <Button variant="outline" color="primary">Outline</Button>\r
                <Button variant="ghost" color="primary">Ghost</Button>\r
                <Button loading>Loading</Button>\r
                <Button disabled>Disabled</Button>\r
              </div>\r
            </div>\r
\r
            {/* Form Section */}\r
            <div>\r
              <h3 style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: 600
            }}>\r
                Form Elements\r
              </h3>\r
              <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
              maxWidth: '400px'
            }}>\r
                <Input placeholder="Enter your name" />\r
                <Input variant="filled" placeholder="Enter your email" />\r
                <Input variant="underline" placeholder="Enter your password" type="password" />\r
                <Input error placeholder="Error state" />\r
                <Input success placeholder="Success state" />\r
              </div>\r
            </div>\r
\r
            {/* Tabs Section */}\r
            <div>\r
              <h3 style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: 600
            }}>\r
                Tabs\r
              </h3>\r
              <div style={{
              display: 'flex',
              gap: '8px',
              marginBottom: '16px'
            }}>\r
                <Tab variant="underline" selected>Overview</Tab>\r
                <Tab variant="underline">Activity</Tab>\r
                <Tab variant="underline">Analytics</Tab>\r
                <Tab variant="underline" disabled>Reports</Tab>\r
              </div>\r
              <div style={{
              display: 'flex',
              gap: '8px'
            }}>\r
                <Tab variant="filled" selected>All</Tab>\r
                <Tab variant="filled">Active</Tab>\r
                <Tab variant="filled">Archived</Tab>\r
              </div>\r
            </div>\r
\r
            {/* User Profile Card */}\r
            <div>\r
              <h3 style={{
              marginBottom: '16px',
              fontSize: '20px',
              fontWeight: 600
            }}>\r
                User Profile Card\r
              </h3>\r
              <div style={{
              padding: '24px',
              borderRadius: '12px',
              background: 'var(--wg-color-bg-secondary, #f5f5f5)',
              maxWidth: '400px'
            }}>\r
                <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '16px'
              }}>\r
                  <Avatar size="xl" fallback="JD">JD</Avatar>\r
                  <div>\r
                    <h4 style={{
                    fontSize: '18px',
                    fontWeight: 600,
                    marginBottom: '4px'
                  }}>\r
                      John Doe\r
                    </h4>\r
                    <p style={{
                    fontSize: '14px',
                    color: 'var(--wg-color-text-secondary, #666666)'
                  }}>\r
                      john.doe@example.com\r
                    </p>\r
                  </div>\r
                </div>\r
                <Divider spacing="md" />\r
                <div style={{
                display: 'flex',
                gap: '8px',
                marginTop: '16px'
              }}>\r
                  <Badge color="success">Active</Badge>\r
                  <Badge color="primary">Premium</Badge>\r
                  <Badge color="info">Verified</Badge>\r
                </div>\r
              </div>\r
            </div>\r
          </div>\r
        </div>\r
      </div>;
  }
}`,...(E=(v=m.parameters)==null?void 0:v.docs)==null?void 0:E.source}}};var B,b,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: () => <ThemeShowcase theme="default" />
}`,...(S=(b=s.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var T,w,k;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: () => <ThemeShowcase theme="dark" />
}`,...(k=(w=d.parameters)==null?void 0:w.docs)==null?void 0:k.source}}};var D,z,W;p.parameters={...p.parameters,docs:{...(D=p.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: () => <ThemeShowcase theme="crypto" />
}`,...(W=(z=p.parameters)==null?void 0:z.docs)==null?void 0:W.source}}};const R=["AllThemes","ThemeSwitcher","DefaultTheme","DarkTheme","CryptoTheme"];export{c as AllThemes,p as CryptoTheme,d as DarkTheme,s as DefaultTheme,m as ThemeSwitcher,R as __namedExportsOrder,P as default};
