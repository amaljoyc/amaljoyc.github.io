(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{410:function(e,t,r){"use strict";r.r(t);var n=r(11),s=Object(n.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("p",[e._v("Testing Java service classes might get a little tricky if they use application properties which are injected via Spring. Creating separate test-properties file for such tests is expensive if it has only one or two properties in it. In such situations, it could be helpful to use the below described approach.")]),e._v(" "),r("h3",{attrs:{id:"use-propertyplaceholderconfigurer-bean-with-properties"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#use-propertyplaceholderconfigurer-bean-with-properties"}},[e._v("#")]),e._v(" Use PropertyPlaceholderConfigurer Bean with properties")]),e._v(" "),r("p",[e._v("As simple as this,")]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('\t@Bean\n\tPropertyPlaceholderConfigurer propertyConfigurer() {\n\t\tPropertyPlaceholderConfigurer configurer = new PropertyPlaceholderConfigurer();\n\t\tProperties properties = new Properties();\n\t\tproperties.setProperty("some.sample.property", "hello");\n\t\tconfigurer.setProperties(properties);\n\t\treturn configurer;\n\t}\n')])])]),r("p",[e._v("Here, instead of loading the properties from an external properties file, we directly set the property key and value(as strings) during configuration.")]),e._v(" "),r("h3",{attrs:{id:"more-detailed-code-structure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#more-detailed-code-structure"}},[e._v("#")]),e._v(" More Detailed Code Structure")]),e._v(" "),r("ul",[r("li",[e._v("Maven Dependencies Used")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("\t<dependency>\n\t\t<groupId>junit</groupId>\n\t\t<artifactId>junit</artifactId>\n\t\t<version>4.12</version>\n\t\t<scope>test</scope>\n\t</dependency>\n\t<dependency>\n\t\t<groupId>org.springframework</groupId>\n\t\t<artifactId>spring-test</artifactId>\n\t\t<version>4.3.1.RELEASE</version>\n\t</dependency>\n\t<dependency>\n\t\t<groupId>org.springframework</groupId>\n\t\t<artifactId>spring-context</artifactId>\n\t\t<version>4.3.1.RELEASE</version>\n\t</dependency>\n")])])]),r("ul",[r("li",[e._v("Service Class")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('\tpublic class SampleService {\n\n\t\t@Value("${some.sample.property}")\n\t\tprivate String sampleProperty;\n\n\t\tpublic void print() {\n\t\t\tSystem.out.println(sampleProperty);\n\t\t}\n\n\t}\n')])])]),r("ul",[r("li",[e._v("Junit Test Class")])]),e._v(" "),r("div",{staticClass:"language- extra-class"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v('\t@RunWith(SpringJUnit4ClassRunner.class)\n\t@ContextConfiguration(classes = { SampleServiceTest.Config.class })\n\tpublic class SampleServiceTest {\n\n\t\tstatic class Config {\n\t\t\t@Bean\n\t\t\tPropertyPlaceholderConfigurer propertyConfigurer() {\n\t\t\t\tPropertyPlaceholderConfigurer configurer = new PropertyPlaceholderConfigurer();\n\t\t\t\tProperties properties = new Properties();\n\t\t\t\tproperties.setProperty("some.sample.property", "hello");\n\t\t\t\tconfigurer.setProperties(properties);\n\t\t\t\treturn configurer;\n\t\t\t}\n\n\t\t\t@Bean\n\t\t\tSampleService sampleService() {\n\t\t\t\treturn new SampleService();\n\t\t\t}\n\t\t}\n\n\t\t@Autowired\n\t\tSampleService service;\n\n\t\t@Test\n\t\tpublic void test() {\n\t\t\tservice.print();\n\t\t}\n\n\t}\n')])])])])}),[],!1,null,null,null);t.default=s.exports}}]);