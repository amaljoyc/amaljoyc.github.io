(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{411:function(e,n,a){"use strict";a.r(n);var s=a(11),t=Object(s.a)({},(function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("p",[e._v("Spring with annotations has made asynchronous processing much more easier to handle. You can make any methods to behave asynchronously just by annotating it with @Async. Read ahead to know more about this.")]),e._v(" "),a("h3",{attrs:{id:"enable-asynchronous-processing"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#enable-asynchronous-processing"}},[e._v("#")]),e._v(" Enable Asynchronous processing")]),e._v(" "),a("p",[e._v("Spring provides the annotation "),a("code",[e._v("@EnableAsync")]),e._v(" to enable the asynchronous processing in the first place. This annotation can be added to any of the @Configuration class that you have in your application. If you are using Spring-Boot, then you can also add this annotation into the @SpringBootApplication class as it is also a configuration class by default.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@Configuration\n@EnableAsync\npublic class SampleConfig {\n\n}\n")])])]),a("h3",{attrs:{id:"make-a-method-asynchronous"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#make-a-method-asynchronous"}},[e._v("#")]),e._v(" Make a method asynchronous")]),e._v(" "),a("p",[e._v("Now you can make any method in your application asynchronous by adding the annotation "),a("code",[e._v("@Async")]),e._v(" on top of the method definition. But there are couple of catchy points to remember while doing this.")]),e._v(" "),a("ul",[a("li",[e._v("@Async works with "),a("em",[e._v("public")]),e._v(" methods only")]),e._v(" "),a("li",[e._v("Calling the @Async method from with the same class will not work.")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("@Service\npublic class SampleAsyncService {\n\n  @Async\n  public void process() {\n\n  }\n}\n\n...\n\npublic class AnotherService {\n\n  @Autowired\n  private SampleAsyncService sampleService;\n\n  public void doAsyncProcess() {\n    sampleService.process()\n  }\n}\n")])])]),a("h3",{attrs:{id:"using-executor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-executor"}},[e._v("#")]),e._v(" Using Executor")]),e._v(" "),a("p",[e._v("By default, Spring uses "),a("em",[e._v("SimpleAsyncTaskExecutor")]),e._v(" to run the async methods. That is the most easiest and simplest way to perform asynchronous processing without the need to do additional configuration. But SimpleAsyncTaskExecutor creates new thread every time for each call to the async method. Hence it is recommended to configure a separate task executor especially if you want to use this in production. Lets configure "),a("em",[e._v("ThreadPoolTaskExecutor")]),e._v(" which reuses threads and is more efficient compared to SimpleAsyncTaskExecutor.")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@Configuration\n@EnableAsync\npublic class SampleConfig {\n\n  @Bean(name = "threadPoolTaskExecutor")\n  public Executor threadPoolTaskExecutor() {\n    return new ThreadPoolTaskExecutor();\n  }\n}\n')])])]),a("p",[e._v("Now to use the new configured task executor, define the async method by passing the task executor name to @Async as shown below,")]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('@Service\npublic class SampleAsyncService {\n\n  @Async("threadPoolTaskExecutor")\n  public void process() {\n\n  }\n}\n')])])])])}),[],!1,null,null,null);n.default=t.exports}}]);