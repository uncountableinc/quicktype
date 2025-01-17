"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Run_1 = require("./Run");
exports.getTargetLanguage = Run_1.getTargetLanguage;
exports.quicktypeMultiFile = Run_1.quicktypeMultiFile;
exports.quicktypeMultiFileSync = Run_1.quicktypeMultiFileSync;
exports.quicktype = Run_1.quicktype;
exports.combineRenderResults = Run_1.combineRenderResults;
exports.inferenceFlags = Run_1.inferenceFlags;
exports.inferenceFlagNames = Run_1.inferenceFlagNames;
exports.defaultInferenceFlags = Run_1.defaultInferenceFlags;
exports.inferenceFlagsObject = Run_1.inferenceFlagsObject;
var CompressedJSON_1 = require("./input/CompressedJSON");
exports.CompressedJSON = CompressedJSON_1.CompressedJSON;
var Inputs_1 = require("./input/Inputs");
exports.InputData = Inputs_1.InputData;
exports.JSONInput = Inputs_1.JSONInput;
exports.jsonInputForTargetLanguage = Inputs_1.jsonInputForTargetLanguage;
var JSONSchemaInput_1 = require("./input/JSONSchemaInput");
exports.JSONSchemaInput = JSONSchemaInput_1.JSONSchemaInput;
var JSONSchemaInput_2 = require("./input/JSONSchemaInput");
exports.Ref = JSONSchemaInput_2.Ref;
var RendererOptions_1 = require("./RendererOptions");
exports.Option = RendererOptions_1.Option;
exports.getOptionValues = RendererOptions_1.getOptionValues;
var TargetLanguage_1 = require("./TargetLanguage");
exports.TargetLanguage = TargetLanguage_1.TargetLanguage;
var All_1 = require("./language/All");
exports.defaultTargetLanguages = All_1.all;
exports.languageNamed = All_1.languageNamed;
var Source_1 = require("./Source");
exports.modifySource = Source_1.modifySource;
exports.singleWord = Source_1.singleWord;
exports.parenIfNeeded = Source_1.parenIfNeeded;
var Naming_1 = require("./Naming");
exports.Name = Naming_1.Name;
exports.funPrefixNamer = Naming_1.funPrefixNamer;
exports.Namer = Naming_1.Namer;
var Annotation_1 = require("./Annotation");
exports.IssueAnnotationData = Annotation_1.IssueAnnotationData;
var Support_1 = require("./support/Support");
exports.panic = Support_1.panic;
exports.assert = Support_1.assert;
exports.defined = Support_1.defined;
exports.assertNever = Support_1.assertNever;
exports.parseJSON = Support_1.parseJSON;
exports.checkStringMap = Support_1.checkStringMap;
exports.checkArray = Support_1.checkArray;
exports.inflateBase64 = Support_1.inflateBase64;
var Strings_1 = require("./support/Strings");
exports.splitIntoWords = Strings_1.splitIntoWords;
exports.capitalize = Strings_1.capitalize;
exports.combineWords = Strings_1.combineWords;
exports.firstUpperWordStyle = Strings_1.firstUpperWordStyle;
exports.allUpperWordStyle = Strings_1.allUpperWordStyle;
exports.legalizeCharacters = Strings_1.legalizeCharacters;
exports.isLetterOrDigit = Strings_1.isLetterOrDigit;
var MarkovChain_1 = require("./MarkovChain");
exports.trainMarkovChain = MarkovChain_1.train;
var Messages_1 = require("./Messages");
exports.QuickTypeError = Messages_1.QuickTypeError;
exports.messageError = Messages_1.messageError;
exports.messageAssert = Messages_1.messageAssert;
var Type_1 = require("./Type");
exports.Type = Type_1.Type;
exports.PrimitiveType = Type_1.PrimitiveType;
exports.ArrayType = Type_1.ArrayType;
exports.ClassType = Type_1.ClassType;
exports.ClassProperty = Type_1.ClassProperty;
exports.EnumType = Type_1.EnumType;
exports.MapType = Type_1.MapType;
exports.UnionType = Type_1.UnionType;
exports.ObjectType = Type_1.ObjectType;
var get_stream_1 = require("./input/io/get-stream");
exports.getStream = get_stream_1.getStream;
var NodeIO_1 = require("./input/io/NodeIO");
exports.readableFromFileOrURL = NodeIO_1.readableFromFileOrURL;
exports.readFromFileOrURL = NodeIO_1.readFromFileOrURL;
var FetchingJSONSchemaStore_1 = require("./input/FetchingJSONSchemaStore");
exports.FetchingJSONSchemaStore = FetchingJSONSchemaStore_1.FetchingJSONSchemaStore;
var JSONSchemaStore_1 = require("./input/JSONSchemaStore");
exports.JSONSchemaStore = JSONSchemaStore_1.JSONSchemaStore;
var PostmanCollection_1 = require("./input/PostmanCollection");
exports.sourcesFromPostmanCollection = PostmanCollection_1.sourcesFromPostmanCollection;
var TypeBuilder_1 = require("./TypeBuilder");
exports.TypeBuilder = TypeBuilder_1.TypeBuilder;
var TypeGraph_1 = require("./TypeGraph");
exports.derefTypeRef = TypeGraph_1.derefTypeRef;
var TypeAttributes_1 = require("./attributes/TypeAttributes");
exports.TypeAttributeKind = TypeAttributes_1.TypeAttributeKind;
exports.emptyTypeAttributes = TypeAttributes_1.emptyTypeAttributes;
var TypeNames_1 = require("./attributes/TypeNames");
exports.TypeNames = TypeNames_1.TypeNames;
exports.makeNamesTypeAttributes = TypeNames_1.makeNamesTypeAttributes;
exports.namesTypeAttributeKind = TypeNames_1.namesTypeAttributeKind;
var StringTypes_1 = require("./attributes/StringTypes");
exports.StringTypes = StringTypes_1.StringTypes;
var TypeUtils_1 = require("./TypeUtils");
exports.removeNullFromUnion = TypeUtils_1.removeNullFromUnion;
exports.matchType = TypeUtils_1.matchType;
exports.nullableFromUnion = TypeUtils_1.nullableFromUnion;
var ConvenienceRenderer_1 = require("./ConvenienceRenderer");
exports.ConvenienceRenderer = ConvenienceRenderer_1.ConvenienceRenderer;
var URIAttributes_1 = require("./attributes/URIAttributes");
exports.uriTypeAttributeKind = URIAttributes_1.uriTypeAttributeKind;
var CPlusPlus_1 = require("./language/CPlusPlus");
exports.CPlusPlusTargetLanguage = CPlusPlus_1.CPlusPlusTargetLanguage;
exports.CPlusPlusRenderer = CPlusPlus_1.CPlusPlusRenderer;
exports.cPlusPlusOptions = CPlusPlus_1.cPlusPlusOptions;
var CSharp_1 = require("./language/CSharp");
exports.CSharpTargetLanguage = CSharp_1.CSharpTargetLanguage;
exports.cSharpOptions = CSharp_1.cSharpOptions;
exports.CSharpRenderer = CSharp_1.CSharpRenderer;
exports.NewtonsoftCSharpTargetLanguage = CSharp_1.NewtonsoftCSharpTargetLanguage;
exports.newtonsoftCSharpOptions = CSharp_1.newtonsoftCSharpOptions;
exports.NewtonsoftCSharpRenderer = CSharp_1.NewtonsoftCSharpRenderer;
var Golang_1 = require("./language/Golang");
exports.GoTargetLanguage = Golang_1.GoTargetLanguage;
exports.GoRenderer = Golang_1.GoRenderer;
exports.goOptions = Golang_1.goOptions;
var Objective_C_1 = require("./language/Objective-C");
exports.ObjectiveCTargetLanguage = Objective_C_1.ObjectiveCTargetLanguage;
exports.ObjectiveCRenderer = Objective_C_1.ObjectiveCRenderer;
exports.objcOptions = Objective_C_1.objcOptions;
var Java_1 = require("./language/Java");
exports.JavaTargetLanguage = Java_1.JavaTargetLanguage;
exports.JavaRenderer = Java_1.JavaRenderer;
exports.javaOptions = Java_1.javaOptions;
var JavaScript_1 = require("./language/JavaScript");
exports.JavaScriptTargetLanguage = JavaScript_1.JavaScriptTargetLanguage;
exports.JavaScriptRenderer = JavaScript_1.JavaScriptRenderer;
exports.javaScriptOptions = JavaScript_1.javaScriptOptions;
var JavaScriptPropTypes_1 = require("./language/JavaScriptPropTypes");
exports.JavaScriptPropTypesTargetLanguage = JavaScriptPropTypes_1.JavaScriptPropTypesTargetLanguage;
exports.JavaScriptPropTypesRenderer = JavaScriptPropTypes_1.JavaScriptPropTypesRenderer;
exports.javaScriptPropTypesOptions = JavaScriptPropTypes_1.javaScriptPropTypesOptions;
var TypeScriptFlow_1 = require("./language/TypeScriptFlow");
exports.TypeScriptTargetLanguage = TypeScriptFlow_1.TypeScriptTargetLanguage;
exports.TypeScriptRenderer = TypeScriptFlow_1.TypeScriptRenderer;
exports.FlowTargetLanguage = TypeScriptFlow_1.FlowTargetLanguage;
exports.FlowRenderer = TypeScriptFlow_1.FlowRenderer;
exports.tsFlowOptions = TypeScriptFlow_1.tsFlowOptions;
var Swift_1 = require("./language/Swift");
exports.SwiftTargetLanguage = Swift_1.SwiftTargetLanguage;
exports.SwiftRenderer = Swift_1.SwiftRenderer;
exports.swiftOptions = Swift_1.swiftOptions;
var Kotlin_1 = require("./language/Kotlin");
exports.KotlinTargetLanguage = Kotlin_1.KotlinTargetLanguage;
exports.KotlinRenderer = Kotlin_1.KotlinRenderer;
exports.kotlinOptions = Kotlin_1.kotlinOptions;
var Elm_1 = require("./language/Elm");
exports.ElmTargetLanguage = Elm_1.ElmTargetLanguage;
exports.ElmRenderer = Elm_1.ElmRenderer;
exports.elmOptions = Elm_1.elmOptions;
var JSONSchema_1 = require("./language/JSONSchema");
exports.JSONSchemaTargetLanguage = JSONSchema_1.JSONSchemaTargetLanguage;
exports.JSONSchemaRenderer = JSONSchema_1.JSONSchemaRenderer;
var Rust_1 = require("./language/Rust");
exports.RustTargetLanguage = Rust_1.RustTargetLanguage;
exports.RustRenderer = Rust_1.RustRenderer;
exports.rustOptions = Rust_1.rustOptions;
var ruby_1 = require("./language/ruby");
exports.RubyTargetLanguage = ruby_1.RubyTargetLanguage;
exports.RubyRenderer = ruby_1.RubyRenderer;
exports.rubyOptions = ruby_1.rubyOptions;
var Crystal_1 = require("./language/Crystal");
exports.CrystalTargetLanguage = Crystal_1.CrystalTargetLanguage;
exports.CrystalRenderer = Crystal_1.CrystalRenderer;
var Haskell_1 = require("./language/Haskell");
exports.HaskellTargetLanguage = Haskell_1.HaskellTargetLanguage;
exports.HaskellRenderer = Haskell_1.HaskellRenderer;
exports.haskellOptions = Haskell_1.haskellOptions;
var Dart_1 = require("./language/Dart");
exports.DartTargetLanguage = Dart_1.DartTargetLanguage;
exports.DartRenderer = Dart_1.DartRenderer;
exports.dartOptions = Dart_1.dartOptions;
