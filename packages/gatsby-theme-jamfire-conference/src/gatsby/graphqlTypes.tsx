export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>;
  lossless?: Maybe<Scalars['Boolean']>;
  speed?: Maybe<Scalars['Int']>;
};

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: Maybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>;
};

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>;
  ne?: Maybe<Scalars['Boolean']>;
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};


export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>;
  ne?: Maybe<Scalars['Date']>;
  gt?: Maybe<Scalars['Date']>;
  gte?: Maybe<Scalars['Date']>;
  lt?: Maybe<Scalars['Date']>;
  lte?: Maybe<Scalars['Date']>;
  in?: Maybe<Array<Maybe<Scalars['Date']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
  __typename?: 'Directory';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
  __typename?: 'DirectoryConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};


export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum;
};


export type DirectoryConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
  __typename?: 'DirectoryEdge';
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export enum DirectoryFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
  __typename?: 'DirectoryGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
  __typename?: 'File';
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  blksize?: Maybe<Scalars['Int']>;
  blocks?: Maybe<Scalars['Int']>;
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  /** Returns all children nodes filtered by type MarkdownRemark */
  childrenMarkdownRemark?: Maybe<Array<Maybe<MarkdownRemark>>>;
  /** Returns the first child node of type MarkdownRemark or null if there are no children of given type on this node */
  childMarkdownRemark?: Maybe<MarkdownRemark>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};


export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
  __typename?: 'FileConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};


export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMaxArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionMinArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionSumArgs = {
  field: FileFieldsEnum;
};


export type FileConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: FileFieldsEnum;
};

export type FileEdge = {
  __typename?: 'FileEdge';
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export enum FileFieldsEnum {
  sourceInstanceName = 'sourceInstanceName',
  absolutePath = 'absolutePath',
  relativePath = 'relativePath',
  extension = 'extension',
  size = 'size',
  prettySize = 'prettySize',
  modifiedTime = 'modifiedTime',
  accessTime = 'accessTime',
  changeTime = 'changeTime',
  birthTime = 'birthTime',
  root = 'root',
  dir = 'dir',
  base = 'base',
  ext = 'ext',
  name = 'name',
  relativeDirectory = 'relativeDirectory',
  dev = 'dev',
  mode = 'mode',
  nlink = 'nlink',
  uid = 'uid',
  gid = 'gid',
  rdev = 'rdev',
  ino = 'ino',
  atimeMs = 'atimeMs',
  mtimeMs = 'mtimeMs',
  ctimeMs = 'ctimeMs',
  atime = 'atime',
  mtime = 'mtime',
  ctime = 'ctime',
  birthtime = 'birthtime',
  birthtimeMs = 'birthtimeMs',
  blksize = 'blksize',
  blocks = 'blocks',
  publicURL = 'publicURL',
  childrenImageSharp = 'childrenImageSharp',
  childrenImageSharp___fixed___base64 = 'childrenImageSharp___fixed___base64',
  childrenImageSharp___fixed___tracedSVG = 'childrenImageSharp___fixed___tracedSVG',
  childrenImageSharp___fixed___aspectRatio = 'childrenImageSharp___fixed___aspectRatio',
  childrenImageSharp___fixed___width = 'childrenImageSharp___fixed___width',
  childrenImageSharp___fixed___height = 'childrenImageSharp___fixed___height',
  childrenImageSharp___fixed___src = 'childrenImageSharp___fixed___src',
  childrenImageSharp___fixed___srcSet = 'childrenImageSharp___fixed___srcSet',
  childrenImageSharp___fixed___srcWebp = 'childrenImageSharp___fixed___srcWebp',
  childrenImageSharp___fixed___srcSetWebp = 'childrenImageSharp___fixed___srcSetWebp',
  childrenImageSharp___fixed___originalName = 'childrenImageSharp___fixed___originalName',
  childrenImageSharp___fluid___base64 = 'childrenImageSharp___fluid___base64',
  childrenImageSharp___fluid___tracedSVG = 'childrenImageSharp___fluid___tracedSVG',
  childrenImageSharp___fluid___aspectRatio = 'childrenImageSharp___fluid___aspectRatio',
  childrenImageSharp___fluid___src = 'childrenImageSharp___fluid___src',
  childrenImageSharp___fluid___srcSet = 'childrenImageSharp___fluid___srcSet',
  childrenImageSharp___fluid___srcWebp = 'childrenImageSharp___fluid___srcWebp',
  childrenImageSharp___fluid___srcSetWebp = 'childrenImageSharp___fluid___srcSetWebp',
  childrenImageSharp___fluid___sizes = 'childrenImageSharp___fluid___sizes',
  childrenImageSharp___fluid___originalImg = 'childrenImageSharp___fluid___originalImg',
  childrenImageSharp___fluid___originalName = 'childrenImageSharp___fluid___originalName',
  childrenImageSharp___fluid___presentationWidth = 'childrenImageSharp___fluid___presentationWidth',
  childrenImageSharp___fluid___presentationHeight = 'childrenImageSharp___fluid___presentationHeight',
  childrenImageSharp___gatsbyImageData = 'childrenImageSharp___gatsbyImageData',
  childrenImageSharp___original___width = 'childrenImageSharp___original___width',
  childrenImageSharp___original___height = 'childrenImageSharp___original___height',
  childrenImageSharp___original___src = 'childrenImageSharp___original___src',
  childrenImageSharp___resize___src = 'childrenImageSharp___resize___src',
  childrenImageSharp___resize___tracedSVG = 'childrenImageSharp___resize___tracedSVG',
  childrenImageSharp___resize___width = 'childrenImageSharp___resize___width',
  childrenImageSharp___resize___height = 'childrenImageSharp___resize___height',
  childrenImageSharp___resize___aspectRatio = 'childrenImageSharp___resize___aspectRatio',
  childrenImageSharp___resize___originalName = 'childrenImageSharp___resize___originalName',
  childrenImageSharp___id = 'childrenImageSharp___id',
  childrenImageSharp___parent___id = 'childrenImageSharp___parent___id',
  childrenImageSharp___parent___parent___id = 'childrenImageSharp___parent___parent___id',
  childrenImageSharp___parent___parent___children = 'childrenImageSharp___parent___parent___children',
  childrenImageSharp___parent___children = 'childrenImageSharp___parent___children',
  childrenImageSharp___parent___children___id = 'childrenImageSharp___parent___children___id',
  childrenImageSharp___parent___children___children = 'childrenImageSharp___parent___children___children',
  childrenImageSharp___parent___internal___content = 'childrenImageSharp___parent___internal___content',
  childrenImageSharp___parent___internal___contentDigest = 'childrenImageSharp___parent___internal___contentDigest',
  childrenImageSharp___parent___internal___description = 'childrenImageSharp___parent___internal___description',
  childrenImageSharp___parent___internal___fieldOwners = 'childrenImageSharp___parent___internal___fieldOwners',
  childrenImageSharp___parent___internal___ignoreType = 'childrenImageSharp___parent___internal___ignoreType',
  childrenImageSharp___parent___internal___mediaType = 'childrenImageSharp___parent___internal___mediaType',
  childrenImageSharp___parent___internal___owner = 'childrenImageSharp___parent___internal___owner',
  childrenImageSharp___parent___internal___type = 'childrenImageSharp___parent___internal___type',
  childrenImageSharp___children = 'childrenImageSharp___children',
  childrenImageSharp___children___id = 'childrenImageSharp___children___id',
  childrenImageSharp___children___parent___id = 'childrenImageSharp___children___parent___id',
  childrenImageSharp___children___parent___children = 'childrenImageSharp___children___parent___children',
  childrenImageSharp___children___children = 'childrenImageSharp___children___children',
  childrenImageSharp___children___children___id = 'childrenImageSharp___children___children___id',
  childrenImageSharp___children___children___children = 'childrenImageSharp___children___children___children',
  childrenImageSharp___children___internal___content = 'childrenImageSharp___children___internal___content',
  childrenImageSharp___children___internal___contentDigest = 'childrenImageSharp___children___internal___contentDigest',
  childrenImageSharp___children___internal___description = 'childrenImageSharp___children___internal___description',
  childrenImageSharp___children___internal___fieldOwners = 'childrenImageSharp___children___internal___fieldOwners',
  childrenImageSharp___children___internal___ignoreType = 'childrenImageSharp___children___internal___ignoreType',
  childrenImageSharp___children___internal___mediaType = 'childrenImageSharp___children___internal___mediaType',
  childrenImageSharp___children___internal___owner = 'childrenImageSharp___children___internal___owner',
  childrenImageSharp___children___internal___type = 'childrenImageSharp___children___internal___type',
  childrenImageSharp___internal___content = 'childrenImageSharp___internal___content',
  childrenImageSharp___internal___contentDigest = 'childrenImageSharp___internal___contentDigest',
  childrenImageSharp___internal___description = 'childrenImageSharp___internal___description',
  childrenImageSharp___internal___fieldOwners = 'childrenImageSharp___internal___fieldOwners',
  childrenImageSharp___internal___ignoreType = 'childrenImageSharp___internal___ignoreType',
  childrenImageSharp___internal___mediaType = 'childrenImageSharp___internal___mediaType',
  childrenImageSharp___internal___owner = 'childrenImageSharp___internal___owner',
  childrenImageSharp___internal___type = 'childrenImageSharp___internal___type',
  childImageSharp___fixed___base64 = 'childImageSharp___fixed___base64',
  childImageSharp___fixed___tracedSVG = 'childImageSharp___fixed___tracedSVG',
  childImageSharp___fixed___aspectRatio = 'childImageSharp___fixed___aspectRatio',
  childImageSharp___fixed___width = 'childImageSharp___fixed___width',
  childImageSharp___fixed___height = 'childImageSharp___fixed___height',
  childImageSharp___fixed___src = 'childImageSharp___fixed___src',
  childImageSharp___fixed___srcSet = 'childImageSharp___fixed___srcSet',
  childImageSharp___fixed___srcWebp = 'childImageSharp___fixed___srcWebp',
  childImageSharp___fixed___srcSetWebp = 'childImageSharp___fixed___srcSetWebp',
  childImageSharp___fixed___originalName = 'childImageSharp___fixed___originalName',
  childImageSharp___fluid___base64 = 'childImageSharp___fluid___base64',
  childImageSharp___fluid___tracedSVG = 'childImageSharp___fluid___tracedSVG',
  childImageSharp___fluid___aspectRatio = 'childImageSharp___fluid___aspectRatio',
  childImageSharp___fluid___src = 'childImageSharp___fluid___src',
  childImageSharp___fluid___srcSet = 'childImageSharp___fluid___srcSet',
  childImageSharp___fluid___srcWebp = 'childImageSharp___fluid___srcWebp',
  childImageSharp___fluid___srcSetWebp = 'childImageSharp___fluid___srcSetWebp',
  childImageSharp___fluid___sizes = 'childImageSharp___fluid___sizes',
  childImageSharp___fluid___originalImg = 'childImageSharp___fluid___originalImg',
  childImageSharp___fluid___originalName = 'childImageSharp___fluid___originalName',
  childImageSharp___fluid___presentationWidth = 'childImageSharp___fluid___presentationWidth',
  childImageSharp___fluid___presentationHeight = 'childImageSharp___fluid___presentationHeight',
  childImageSharp___gatsbyImageData = 'childImageSharp___gatsbyImageData',
  childImageSharp___original___width = 'childImageSharp___original___width',
  childImageSharp___original___height = 'childImageSharp___original___height',
  childImageSharp___original___src = 'childImageSharp___original___src',
  childImageSharp___resize___src = 'childImageSharp___resize___src',
  childImageSharp___resize___tracedSVG = 'childImageSharp___resize___tracedSVG',
  childImageSharp___resize___width = 'childImageSharp___resize___width',
  childImageSharp___resize___height = 'childImageSharp___resize___height',
  childImageSharp___resize___aspectRatio = 'childImageSharp___resize___aspectRatio',
  childImageSharp___resize___originalName = 'childImageSharp___resize___originalName',
  childImageSharp___id = 'childImageSharp___id',
  childImageSharp___parent___id = 'childImageSharp___parent___id',
  childImageSharp___parent___parent___id = 'childImageSharp___parent___parent___id',
  childImageSharp___parent___parent___children = 'childImageSharp___parent___parent___children',
  childImageSharp___parent___children = 'childImageSharp___parent___children',
  childImageSharp___parent___children___id = 'childImageSharp___parent___children___id',
  childImageSharp___parent___children___children = 'childImageSharp___parent___children___children',
  childImageSharp___parent___internal___content = 'childImageSharp___parent___internal___content',
  childImageSharp___parent___internal___contentDigest = 'childImageSharp___parent___internal___contentDigest',
  childImageSharp___parent___internal___description = 'childImageSharp___parent___internal___description',
  childImageSharp___parent___internal___fieldOwners = 'childImageSharp___parent___internal___fieldOwners',
  childImageSharp___parent___internal___ignoreType = 'childImageSharp___parent___internal___ignoreType',
  childImageSharp___parent___internal___mediaType = 'childImageSharp___parent___internal___mediaType',
  childImageSharp___parent___internal___owner = 'childImageSharp___parent___internal___owner',
  childImageSharp___parent___internal___type = 'childImageSharp___parent___internal___type',
  childImageSharp___children = 'childImageSharp___children',
  childImageSharp___children___id = 'childImageSharp___children___id',
  childImageSharp___children___parent___id = 'childImageSharp___children___parent___id',
  childImageSharp___children___parent___children = 'childImageSharp___children___parent___children',
  childImageSharp___children___children = 'childImageSharp___children___children',
  childImageSharp___children___children___id = 'childImageSharp___children___children___id',
  childImageSharp___children___children___children = 'childImageSharp___children___children___children',
  childImageSharp___children___internal___content = 'childImageSharp___children___internal___content',
  childImageSharp___children___internal___contentDigest = 'childImageSharp___children___internal___contentDigest',
  childImageSharp___children___internal___description = 'childImageSharp___children___internal___description',
  childImageSharp___children___internal___fieldOwners = 'childImageSharp___children___internal___fieldOwners',
  childImageSharp___children___internal___ignoreType = 'childImageSharp___children___internal___ignoreType',
  childImageSharp___children___internal___mediaType = 'childImageSharp___children___internal___mediaType',
  childImageSharp___children___internal___owner = 'childImageSharp___children___internal___owner',
  childImageSharp___children___internal___type = 'childImageSharp___children___internal___type',
  childImageSharp___internal___content = 'childImageSharp___internal___content',
  childImageSharp___internal___contentDigest = 'childImageSharp___internal___contentDigest',
  childImageSharp___internal___description = 'childImageSharp___internal___description',
  childImageSharp___internal___fieldOwners = 'childImageSharp___internal___fieldOwners',
  childImageSharp___internal___ignoreType = 'childImageSharp___internal___ignoreType',
  childImageSharp___internal___mediaType = 'childImageSharp___internal___mediaType',
  childImageSharp___internal___owner = 'childImageSharp___internal___owner',
  childImageSharp___internal___type = 'childImageSharp___internal___type',
  childrenMarkdownRemark = 'childrenMarkdownRemark',
  childrenMarkdownRemark___id = 'childrenMarkdownRemark___id',
  childrenMarkdownRemark___frontmatter___eventRooms = 'childrenMarkdownRemark___frontmatter___eventRooms',
  childrenMarkdownRemark___frontmatter___eventRooms___slug = 'childrenMarkdownRemark___frontmatter___eventRooms___slug',
  childrenMarkdownRemark___frontmatter___eventRooms___title = 'childrenMarkdownRemark___frontmatter___eventRooms___title',
  childrenMarkdownRemark___frontmatter___eventRooms___description = 'childrenMarkdownRemark___frontmatter___eventRooms___description',
  childrenMarkdownRemark___frontmatter___title = 'childrenMarkdownRemark___frontmatter___title',
  childrenMarkdownRemark___frontmatter___analyticsCookies___enabled = 'childrenMarkdownRemark___frontmatter___analyticsCookies___enabled',
  childrenMarkdownRemark___frontmatter___analyticsCookies___title = 'childrenMarkdownRemark___frontmatter___analyticsCookies___title',
  childrenMarkdownRemark___frontmatter___analyticsCookies___content = 'childrenMarkdownRemark___frontmatter___analyticsCookies___content',
  childrenMarkdownRemark___frontmatter___templateKey = 'childrenMarkdownRemark___frontmatter___templateKey',
  childrenMarkdownRemark___frontmatter___description = 'childrenMarkdownRemark___frontmatter___description',
  childrenMarkdownRemark___frontmatter___siteUrl = 'childrenMarkdownRemark___frontmatter___siteUrl',
  childrenMarkdownRemark___frontmatter___colors___primaryColor = 'childrenMarkdownRemark___frontmatter___colors___primaryColor',
  childrenMarkdownRemark___frontmatter___colors___primaryColorHover = 'childrenMarkdownRemark___frontmatter___colors___primaryColorHover',
  childrenMarkdownRemark___frontmatter___colors___darkModeOnColor = 'childrenMarkdownRemark___frontmatter___colors___darkModeOnColor',
  childrenMarkdownRemark___frontmatter___colors___darkModeOffColor = 'childrenMarkdownRemark___frontmatter___colors___darkModeOffColor',
  childrenMarkdownRemark___frontmatter___socialLogin___facebook = 'childrenMarkdownRemark___frontmatter___socialLogin___facebook',
  childrenMarkdownRemark___frontmatter___socialLogin___google = 'childrenMarkdownRemark___frontmatter___socialLogin___google',
  childrenMarkdownRemark___frontmatter___socialLogin___twitter = 'childrenMarkdownRemark___frontmatter___socialLogin___twitter',
  childrenMarkdownRemark___frontmatter___socialLogin___github = 'childrenMarkdownRemark___frontmatter___socialLogin___github',
  childrenMarkdownRemark___frontmatter___slug = 'childrenMarkdownRemark___frontmatter___slug',
  childrenMarkdownRemark___frontmatter___pageBranding___primaryColor = 'childrenMarkdownRemark___frontmatter___pageBranding___primaryColor',
  childrenMarkdownRemark___frontmatter___pageBranding___primaryColorHover = 'childrenMarkdownRemark___frontmatter___pageBranding___primaryColorHover',
  childrenMarkdownRemark___frontmatter___cookieNotification___title = 'childrenMarkdownRemark___frontmatter___cookieNotification___title',
  childrenMarkdownRemark___frontmatter___cookieNotification___content = 'childrenMarkdownRemark___frontmatter___cookieNotification___content',
  childrenMarkdownRemark___frontmatter___necessaryCookies___title = 'childrenMarkdownRemark___frontmatter___necessaryCookies___title',
  childrenMarkdownRemark___frontmatter___necessaryCookies___content = 'childrenMarkdownRemark___frontmatter___necessaryCookies___content',
  childrenMarkdownRemark___frontmatter___eventInformation___livestreamUrl = 'childrenMarkdownRemark___frontmatter___eventInformation___livestreamUrl',
  childrenMarkdownRemark___frontmatter___eventBranding___primaryColor = 'childrenMarkdownRemark___frontmatter___eventBranding___primaryColor',
  childrenMarkdownRemark___frontmatter___eventBranding___primaryColorHover = 'childrenMarkdownRemark___frontmatter___eventBranding___primaryColorHover',
  childrenMarkdownRemark___frontmatter___eventSettings___allEvents = 'childrenMarkdownRemark___frontmatter___eventSettings___allEvents',
  childrenMarkdownRemark___frontmatter___eventSettings___mainStage = 'childrenMarkdownRemark___frontmatter___eventSettings___mainStage',
  childrenMarkdownRemark___frontmatter___eventSettings___mainStageFeature = 'childrenMarkdownRemark___frontmatter___eventSettings___mainStageFeature',
  childrenMarkdownRemark___frontmatter___eventSettings___chat = 'childrenMarkdownRemark___frontmatter___eventSettings___chat',
  childrenMarkdownRemark___frontmatter___eventSettings___schedule = 'childrenMarkdownRemark___frontmatter___eventSettings___schedule',
  childrenMarkdownRemark___frontmatter___eventSettings___rooms = 'childrenMarkdownRemark___frontmatter___eventSettings___rooms',
  childrenMarkdownRemark___frontmatter___eventSettings___qa = 'childrenMarkdownRemark___frontmatter___eventSettings___qa',
  childrenMarkdownRemark___frontmatter___eventSettings___map = 'childrenMarkdownRemark___frontmatter___eventSettings___map',
  childrenMarkdownRemark___frontmatter___eventSettings___pollsLabel = 'childrenMarkdownRemark___frontmatter___eventSettings___pollsLabel',
  childrenMarkdownRemark___frontmatter___eventSettings___qaLabel = 'childrenMarkdownRemark___frontmatter___eventSettings___qaLabel',
  childrenMarkdownRemark___frontmatter___eventSettings___mainStageLabel = 'childrenMarkdownRemark___frontmatter___eventSettings___mainStageLabel',
  childrenMarkdownRemark___frontmatter___eventSettings___polls = 'childrenMarkdownRemark___frontmatter___eventSettings___polls',
  childrenMarkdownRemark___frontmatter___eventSettings___mapLabel = 'childrenMarkdownRemark___frontmatter___eventSettings___mapLabel',
  childrenMarkdownRemark___frontmatter___eventSettings___allEventsLabel = 'childrenMarkdownRemark___frontmatter___eventSettings___allEventsLabel',
  childrenMarkdownRemark___frontmatter___eventSettings___chatLabel = 'childrenMarkdownRemark___frontmatter___eventSettings___chatLabel',
  childrenMarkdownRemark___frontmatter___eventSettings___roomsLabel = 'childrenMarkdownRemark___frontmatter___eventSettings___roomsLabel',
  childrenMarkdownRemark___frontmatter___eventSettings___scheduleLabel = 'childrenMarkdownRemark___frontmatter___eventSettings___scheduleLabel',
  childrenMarkdownRemark___frontmatter___eventSchedule = 'childrenMarkdownRemark___frontmatter___eventSchedule',
  childrenMarkdownRemark___frontmatter___eventSchedule___title = 'childrenMarkdownRemark___frontmatter___eventSchedule___title',
  childrenMarkdownRemark___frontmatter___eventSchedule___description = 'childrenMarkdownRemark___frontmatter___eventSchedule___description',
  childrenMarkdownRemark___frontmatter___eventQA = 'childrenMarkdownRemark___frontmatter___eventQA',
  childrenMarkdownRemark___frontmatter___eventQA___question = 'childrenMarkdownRemark___frontmatter___eventQA___question',
  childrenMarkdownRemark___frontmatter___eventQA___answer = 'childrenMarkdownRemark___frontmatter___eventQA___answer',
  childrenMarkdownRemark___frontmatter___id = 'childrenMarkdownRemark___frontmatter___id',
  childrenMarkdownRemark___frontmatter___parent___id = 'childrenMarkdownRemark___frontmatter___parent___id',
  childrenMarkdownRemark___frontmatter___parent___children = 'childrenMarkdownRemark___frontmatter___parent___children',
  childrenMarkdownRemark___frontmatter___children = 'childrenMarkdownRemark___frontmatter___children',
  childrenMarkdownRemark___frontmatter___children___id = 'childrenMarkdownRemark___frontmatter___children___id',
  childrenMarkdownRemark___frontmatter___children___children = 'childrenMarkdownRemark___frontmatter___children___children',
  childrenMarkdownRemark___frontmatter___internal___content = 'childrenMarkdownRemark___frontmatter___internal___content',
  childrenMarkdownRemark___frontmatter___internal___contentDigest = 'childrenMarkdownRemark___frontmatter___internal___contentDigest',
  childrenMarkdownRemark___frontmatter___internal___description = 'childrenMarkdownRemark___frontmatter___internal___description',
  childrenMarkdownRemark___frontmatter___internal___fieldOwners = 'childrenMarkdownRemark___frontmatter___internal___fieldOwners',
  childrenMarkdownRemark___frontmatter___internal___ignoreType = 'childrenMarkdownRemark___frontmatter___internal___ignoreType',
  childrenMarkdownRemark___frontmatter___internal___mediaType = 'childrenMarkdownRemark___frontmatter___internal___mediaType',
  childrenMarkdownRemark___frontmatter___internal___owner = 'childrenMarkdownRemark___frontmatter___internal___owner',
  childrenMarkdownRemark___frontmatter___internal___type = 'childrenMarkdownRemark___frontmatter___internal___type',
  childrenMarkdownRemark___excerpt = 'childrenMarkdownRemark___excerpt',
  childrenMarkdownRemark___rawMarkdownBody = 'childrenMarkdownRemark___rawMarkdownBody',
  childrenMarkdownRemark___fileAbsolutePath = 'childrenMarkdownRemark___fileAbsolutePath',
  childrenMarkdownRemark___fields___locale = 'childrenMarkdownRemark___fields___locale',
  childrenMarkdownRemark___fields___templateKey = 'childrenMarkdownRemark___fields___templateKey',
  childrenMarkdownRemark___html = 'childrenMarkdownRemark___html',
  childrenMarkdownRemark___htmlAst = 'childrenMarkdownRemark___htmlAst',
  childrenMarkdownRemark___excerptAst = 'childrenMarkdownRemark___excerptAst',
  childrenMarkdownRemark___headings = 'childrenMarkdownRemark___headings',
  childrenMarkdownRemark___headings___id = 'childrenMarkdownRemark___headings___id',
  childrenMarkdownRemark___headings___value = 'childrenMarkdownRemark___headings___value',
  childrenMarkdownRemark___headings___depth = 'childrenMarkdownRemark___headings___depth',
  childrenMarkdownRemark___timeToRead = 'childrenMarkdownRemark___timeToRead',
  childrenMarkdownRemark___tableOfContents = 'childrenMarkdownRemark___tableOfContents',
  childrenMarkdownRemark___wordCount___paragraphs = 'childrenMarkdownRemark___wordCount___paragraphs',
  childrenMarkdownRemark___wordCount___sentences = 'childrenMarkdownRemark___wordCount___sentences',
  childrenMarkdownRemark___wordCount___words = 'childrenMarkdownRemark___wordCount___words',
  childrenMarkdownRemark___parent___id = 'childrenMarkdownRemark___parent___id',
  childrenMarkdownRemark___parent___parent___id = 'childrenMarkdownRemark___parent___parent___id',
  childrenMarkdownRemark___parent___parent___children = 'childrenMarkdownRemark___parent___parent___children',
  childrenMarkdownRemark___parent___children = 'childrenMarkdownRemark___parent___children',
  childrenMarkdownRemark___parent___children___id = 'childrenMarkdownRemark___parent___children___id',
  childrenMarkdownRemark___parent___children___children = 'childrenMarkdownRemark___parent___children___children',
  childrenMarkdownRemark___parent___internal___content = 'childrenMarkdownRemark___parent___internal___content',
  childrenMarkdownRemark___parent___internal___contentDigest = 'childrenMarkdownRemark___parent___internal___contentDigest',
  childrenMarkdownRemark___parent___internal___description = 'childrenMarkdownRemark___parent___internal___description',
  childrenMarkdownRemark___parent___internal___fieldOwners = 'childrenMarkdownRemark___parent___internal___fieldOwners',
  childrenMarkdownRemark___parent___internal___ignoreType = 'childrenMarkdownRemark___parent___internal___ignoreType',
  childrenMarkdownRemark___parent___internal___mediaType = 'childrenMarkdownRemark___parent___internal___mediaType',
  childrenMarkdownRemark___parent___internal___owner = 'childrenMarkdownRemark___parent___internal___owner',
  childrenMarkdownRemark___parent___internal___type = 'childrenMarkdownRemark___parent___internal___type',
  childrenMarkdownRemark___children = 'childrenMarkdownRemark___children',
  childrenMarkdownRemark___children___id = 'childrenMarkdownRemark___children___id',
  childrenMarkdownRemark___children___parent___id = 'childrenMarkdownRemark___children___parent___id',
  childrenMarkdownRemark___children___parent___children = 'childrenMarkdownRemark___children___parent___children',
  childrenMarkdownRemark___children___children = 'childrenMarkdownRemark___children___children',
  childrenMarkdownRemark___children___children___id = 'childrenMarkdownRemark___children___children___id',
  childrenMarkdownRemark___children___children___children = 'childrenMarkdownRemark___children___children___children',
  childrenMarkdownRemark___children___internal___content = 'childrenMarkdownRemark___children___internal___content',
  childrenMarkdownRemark___children___internal___contentDigest = 'childrenMarkdownRemark___children___internal___contentDigest',
  childrenMarkdownRemark___children___internal___description = 'childrenMarkdownRemark___children___internal___description',
  childrenMarkdownRemark___children___internal___fieldOwners = 'childrenMarkdownRemark___children___internal___fieldOwners',
  childrenMarkdownRemark___children___internal___ignoreType = 'childrenMarkdownRemark___children___internal___ignoreType',
  childrenMarkdownRemark___children___internal___mediaType = 'childrenMarkdownRemark___children___internal___mediaType',
  childrenMarkdownRemark___children___internal___owner = 'childrenMarkdownRemark___children___internal___owner',
  childrenMarkdownRemark___children___internal___type = 'childrenMarkdownRemark___children___internal___type',
  childrenMarkdownRemark___internal___content = 'childrenMarkdownRemark___internal___content',
  childrenMarkdownRemark___internal___contentDigest = 'childrenMarkdownRemark___internal___contentDigest',
  childrenMarkdownRemark___internal___description = 'childrenMarkdownRemark___internal___description',
  childrenMarkdownRemark___internal___fieldOwners = 'childrenMarkdownRemark___internal___fieldOwners',
  childrenMarkdownRemark___internal___ignoreType = 'childrenMarkdownRemark___internal___ignoreType',
  childrenMarkdownRemark___internal___mediaType = 'childrenMarkdownRemark___internal___mediaType',
  childrenMarkdownRemark___internal___owner = 'childrenMarkdownRemark___internal___owner',
  childrenMarkdownRemark___internal___type = 'childrenMarkdownRemark___internal___type',
  childMarkdownRemark___id = 'childMarkdownRemark___id',
  childMarkdownRemark___frontmatter___eventRooms = 'childMarkdownRemark___frontmatter___eventRooms',
  childMarkdownRemark___frontmatter___eventRooms___slug = 'childMarkdownRemark___frontmatter___eventRooms___slug',
  childMarkdownRemark___frontmatter___eventRooms___title = 'childMarkdownRemark___frontmatter___eventRooms___title',
  childMarkdownRemark___frontmatter___eventRooms___description = 'childMarkdownRemark___frontmatter___eventRooms___description',
  childMarkdownRemark___frontmatter___title = 'childMarkdownRemark___frontmatter___title',
  childMarkdownRemark___frontmatter___analyticsCookies___enabled = 'childMarkdownRemark___frontmatter___analyticsCookies___enabled',
  childMarkdownRemark___frontmatter___analyticsCookies___title = 'childMarkdownRemark___frontmatter___analyticsCookies___title',
  childMarkdownRemark___frontmatter___analyticsCookies___content = 'childMarkdownRemark___frontmatter___analyticsCookies___content',
  childMarkdownRemark___frontmatter___templateKey = 'childMarkdownRemark___frontmatter___templateKey',
  childMarkdownRemark___frontmatter___description = 'childMarkdownRemark___frontmatter___description',
  childMarkdownRemark___frontmatter___siteUrl = 'childMarkdownRemark___frontmatter___siteUrl',
  childMarkdownRemark___frontmatter___colors___primaryColor = 'childMarkdownRemark___frontmatter___colors___primaryColor',
  childMarkdownRemark___frontmatter___colors___primaryColorHover = 'childMarkdownRemark___frontmatter___colors___primaryColorHover',
  childMarkdownRemark___frontmatter___colors___darkModeOnColor = 'childMarkdownRemark___frontmatter___colors___darkModeOnColor',
  childMarkdownRemark___frontmatter___colors___darkModeOffColor = 'childMarkdownRemark___frontmatter___colors___darkModeOffColor',
  childMarkdownRemark___frontmatter___socialLogin___facebook = 'childMarkdownRemark___frontmatter___socialLogin___facebook',
  childMarkdownRemark___frontmatter___socialLogin___google = 'childMarkdownRemark___frontmatter___socialLogin___google',
  childMarkdownRemark___frontmatter___socialLogin___twitter = 'childMarkdownRemark___frontmatter___socialLogin___twitter',
  childMarkdownRemark___frontmatter___socialLogin___github = 'childMarkdownRemark___frontmatter___socialLogin___github',
  childMarkdownRemark___frontmatter___slug = 'childMarkdownRemark___frontmatter___slug',
  childMarkdownRemark___frontmatter___pageBranding___primaryColor = 'childMarkdownRemark___frontmatter___pageBranding___primaryColor',
  childMarkdownRemark___frontmatter___pageBranding___primaryColorHover = 'childMarkdownRemark___frontmatter___pageBranding___primaryColorHover',
  childMarkdownRemark___frontmatter___cookieNotification___title = 'childMarkdownRemark___frontmatter___cookieNotification___title',
  childMarkdownRemark___frontmatter___cookieNotification___content = 'childMarkdownRemark___frontmatter___cookieNotification___content',
  childMarkdownRemark___frontmatter___necessaryCookies___title = 'childMarkdownRemark___frontmatter___necessaryCookies___title',
  childMarkdownRemark___frontmatter___necessaryCookies___content = 'childMarkdownRemark___frontmatter___necessaryCookies___content',
  childMarkdownRemark___frontmatter___eventInformation___livestreamUrl = 'childMarkdownRemark___frontmatter___eventInformation___livestreamUrl',
  childMarkdownRemark___frontmatter___eventBranding___primaryColor = 'childMarkdownRemark___frontmatter___eventBranding___primaryColor',
  childMarkdownRemark___frontmatter___eventBranding___primaryColorHover = 'childMarkdownRemark___frontmatter___eventBranding___primaryColorHover',
  childMarkdownRemark___frontmatter___eventSettings___allEvents = 'childMarkdownRemark___frontmatter___eventSettings___allEvents',
  childMarkdownRemark___frontmatter___eventSettings___mainStage = 'childMarkdownRemark___frontmatter___eventSettings___mainStage',
  childMarkdownRemark___frontmatter___eventSettings___mainStageFeature = 'childMarkdownRemark___frontmatter___eventSettings___mainStageFeature',
  childMarkdownRemark___frontmatter___eventSettings___chat = 'childMarkdownRemark___frontmatter___eventSettings___chat',
  childMarkdownRemark___frontmatter___eventSettings___schedule = 'childMarkdownRemark___frontmatter___eventSettings___schedule',
  childMarkdownRemark___frontmatter___eventSettings___rooms = 'childMarkdownRemark___frontmatter___eventSettings___rooms',
  childMarkdownRemark___frontmatter___eventSettings___qa = 'childMarkdownRemark___frontmatter___eventSettings___qa',
  childMarkdownRemark___frontmatter___eventSettings___map = 'childMarkdownRemark___frontmatter___eventSettings___map',
  childMarkdownRemark___frontmatter___eventSettings___pollsLabel = 'childMarkdownRemark___frontmatter___eventSettings___pollsLabel',
  childMarkdownRemark___frontmatter___eventSettings___qaLabel = 'childMarkdownRemark___frontmatter___eventSettings___qaLabel',
  childMarkdownRemark___frontmatter___eventSettings___mainStageLabel = 'childMarkdownRemark___frontmatter___eventSettings___mainStageLabel',
  childMarkdownRemark___frontmatter___eventSettings___polls = 'childMarkdownRemark___frontmatter___eventSettings___polls',
  childMarkdownRemark___frontmatter___eventSettings___mapLabel = 'childMarkdownRemark___frontmatter___eventSettings___mapLabel',
  childMarkdownRemark___frontmatter___eventSettings___allEventsLabel = 'childMarkdownRemark___frontmatter___eventSettings___allEventsLabel',
  childMarkdownRemark___frontmatter___eventSettings___chatLabel = 'childMarkdownRemark___frontmatter___eventSettings___chatLabel',
  childMarkdownRemark___frontmatter___eventSettings___roomsLabel = 'childMarkdownRemark___frontmatter___eventSettings___roomsLabel',
  childMarkdownRemark___frontmatter___eventSettings___scheduleLabel = 'childMarkdownRemark___frontmatter___eventSettings___scheduleLabel',
  childMarkdownRemark___frontmatter___eventSchedule = 'childMarkdownRemark___frontmatter___eventSchedule',
  childMarkdownRemark___frontmatter___eventSchedule___title = 'childMarkdownRemark___frontmatter___eventSchedule___title',
  childMarkdownRemark___frontmatter___eventSchedule___description = 'childMarkdownRemark___frontmatter___eventSchedule___description',
  childMarkdownRemark___frontmatter___eventQA = 'childMarkdownRemark___frontmatter___eventQA',
  childMarkdownRemark___frontmatter___eventQA___question = 'childMarkdownRemark___frontmatter___eventQA___question',
  childMarkdownRemark___frontmatter___eventQA___answer = 'childMarkdownRemark___frontmatter___eventQA___answer',
  childMarkdownRemark___frontmatter___id = 'childMarkdownRemark___frontmatter___id',
  childMarkdownRemark___frontmatter___parent___id = 'childMarkdownRemark___frontmatter___parent___id',
  childMarkdownRemark___frontmatter___parent___children = 'childMarkdownRemark___frontmatter___parent___children',
  childMarkdownRemark___frontmatter___children = 'childMarkdownRemark___frontmatter___children',
  childMarkdownRemark___frontmatter___children___id = 'childMarkdownRemark___frontmatter___children___id',
  childMarkdownRemark___frontmatter___children___children = 'childMarkdownRemark___frontmatter___children___children',
  childMarkdownRemark___frontmatter___internal___content = 'childMarkdownRemark___frontmatter___internal___content',
  childMarkdownRemark___frontmatter___internal___contentDigest = 'childMarkdownRemark___frontmatter___internal___contentDigest',
  childMarkdownRemark___frontmatter___internal___description = 'childMarkdownRemark___frontmatter___internal___description',
  childMarkdownRemark___frontmatter___internal___fieldOwners = 'childMarkdownRemark___frontmatter___internal___fieldOwners',
  childMarkdownRemark___frontmatter___internal___ignoreType = 'childMarkdownRemark___frontmatter___internal___ignoreType',
  childMarkdownRemark___frontmatter___internal___mediaType = 'childMarkdownRemark___frontmatter___internal___mediaType',
  childMarkdownRemark___frontmatter___internal___owner = 'childMarkdownRemark___frontmatter___internal___owner',
  childMarkdownRemark___frontmatter___internal___type = 'childMarkdownRemark___frontmatter___internal___type',
  childMarkdownRemark___excerpt = 'childMarkdownRemark___excerpt',
  childMarkdownRemark___rawMarkdownBody = 'childMarkdownRemark___rawMarkdownBody',
  childMarkdownRemark___fileAbsolutePath = 'childMarkdownRemark___fileAbsolutePath',
  childMarkdownRemark___fields___locale = 'childMarkdownRemark___fields___locale',
  childMarkdownRemark___fields___templateKey = 'childMarkdownRemark___fields___templateKey',
  childMarkdownRemark___html = 'childMarkdownRemark___html',
  childMarkdownRemark___htmlAst = 'childMarkdownRemark___htmlAst',
  childMarkdownRemark___excerptAst = 'childMarkdownRemark___excerptAst',
  childMarkdownRemark___headings = 'childMarkdownRemark___headings',
  childMarkdownRemark___headings___id = 'childMarkdownRemark___headings___id',
  childMarkdownRemark___headings___value = 'childMarkdownRemark___headings___value',
  childMarkdownRemark___headings___depth = 'childMarkdownRemark___headings___depth',
  childMarkdownRemark___timeToRead = 'childMarkdownRemark___timeToRead',
  childMarkdownRemark___tableOfContents = 'childMarkdownRemark___tableOfContents',
  childMarkdownRemark___wordCount___paragraphs = 'childMarkdownRemark___wordCount___paragraphs',
  childMarkdownRemark___wordCount___sentences = 'childMarkdownRemark___wordCount___sentences',
  childMarkdownRemark___wordCount___words = 'childMarkdownRemark___wordCount___words',
  childMarkdownRemark___parent___id = 'childMarkdownRemark___parent___id',
  childMarkdownRemark___parent___parent___id = 'childMarkdownRemark___parent___parent___id',
  childMarkdownRemark___parent___parent___children = 'childMarkdownRemark___parent___parent___children',
  childMarkdownRemark___parent___children = 'childMarkdownRemark___parent___children',
  childMarkdownRemark___parent___children___id = 'childMarkdownRemark___parent___children___id',
  childMarkdownRemark___parent___children___children = 'childMarkdownRemark___parent___children___children',
  childMarkdownRemark___parent___internal___content = 'childMarkdownRemark___parent___internal___content',
  childMarkdownRemark___parent___internal___contentDigest = 'childMarkdownRemark___parent___internal___contentDigest',
  childMarkdownRemark___parent___internal___description = 'childMarkdownRemark___parent___internal___description',
  childMarkdownRemark___parent___internal___fieldOwners = 'childMarkdownRemark___parent___internal___fieldOwners',
  childMarkdownRemark___parent___internal___ignoreType = 'childMarkdownRemark___parent___internal___ignoreType',
  childMarkdownRemark___parent___internal___mediaType = 'childMarkdownRemark___parent___internal___mediaType',
  childMarkdownRemark___parent___internal___owner = 'childMarkdownRemark___parent___internal___owner',
  childMarkdownRemark___parent___internal___type = 'childMarkdownRemark___parent___internal___type',
  childMarkdownRemark___children = 'childMarkdownRemark___children',
  childMarkdownRemark___children___id = 'childMarkdownRemark___children___id',
  childMarkdownRemark___children___parent___id = 'childMarkdownRemark___children___parent___id',
  childMarkdownRemark___children___parent___children = 'childMarkdownRemark___children___parent___children',
  childMarkdownRemark___children___children = 'childMarkdownRemark___children___children',
  childMarkdownRemark___children___children___id = 'childMarkdownRemark___children___children___id',
  childMarkdownRemark___children___children___children = 'childMarkdownRemark___children___children___children',
  childMarkdownRemark___children___internal___content = 'childMarkdownRemark___children___internal___content',
  childMarkdownRemark___children___internal___contentDigest = 'childMarkdownRemark___children___internal___contentDigest',
  childMarkdownRemark___children___internal___description = 'childMarkdownRemark___children___internal___description',
  childMarkdownRemark___children___internal___fieldOwners = 'childMarkdownRemark___children___internal___fieldOwners',
  childMarkdownRemark___children___internal___ignoreType = 'childMarkdownRemark___children___internal___ignoreType',
  childMarkdownRemark___children___internal___mediaType = 'childMarkdownRemark___children___internal___mediaType',
  childMarkdownRemark___children___internal___owner = 'childMarkdownRemark___children___internal___owner',
  childMarkdownRemark___children___internal___type = 'childMarkdownRemark___children___internal___type',
  childMarkdownRemark___internal___content = 'childMarkdownRemark___internal___content',
  childMarkdownRemark___internal___contentDigest = 'childMarkdownRemark___internal___contentDigest',
  childMarkdownRemark___internal___description = 'childMarkdownRemark___internal___description',
  childMarkdownRemark___internal___fieldOwners = 'childMarkdownRemark___internal___fieldOwners',
  childMarkdownRemark___internal___ignoreType = 'childMarkdownRemark___internal___ignoreType',
  childMarkdownRemark___internal___mediaType = 'childMarkdownRemark___internal___mediaType',
  childMarkdownRemark___internal___owner = 'childMarkdownRemark___internal___owner',
  childMarkdownRemark___internal___type = 'childMarkdownRemark___internal___type',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type FileGroupConnection = {
  __typename?: 'FileGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>;
  ne?: Maybe<Scalars['Float']>;
  gt?: Maybe<Scalars['Float']>;
  gte?: Maybe<Scalars['Float']>;
  lt?: Maybe<Scalars['Float']>;
  lte?: Maybe<Scalars['Float']>;
  in?: Maybe<Array<Maybe<Scalars['Float']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type FrontmatterMarkdownField = {
  __typename?: 'FrontmatterMarkdownField';
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
};


export type FrontmatterMarkdownFieldExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type FrontmatterMarkdownFieldExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type FrontmatterMarkdownFieldHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type FrontmatterMarkdownFieldTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export enum ImageCropFocus {
  CENTER = 'CENTER',
  NORTH = 'NORTH',
  NORTHEAST = 'NORTHEAST',
  EAST = 'EAST',
  SOUTHEAST = 'SOUTHEAST',
  SOUTH = 'SOUTH',
  SOUTHWEST = 'SOUTHWEST',
  WEST = 'WEST',
  NORTHWEST = 'NORTHWEST',
  ENTROPY = 'ENTROPY',
  ATTENTION = 'ATTENTION'
}

export enum ImageFit {
  COVER = 'COVER',
  CONTAIN = 'CONTAIN',
  FILL = 'FILL',
  INSIDE = 'INSIDE',
  OUTSIDE = 'OUTSIDE'
}

export enum ImageFormat {
  NO_CHANGE = 'NO_CHANGE',
  AUTO = 'AUTO',
  JPG = 'JPG',
  PNG = 'PNG',
  WEBP = 'WEBP',
  AVIF = 'AVIF'
}

export enum ImageLayout {
  FIXED = 'FIXED',
  FULL_WIDTH = 'FULL_WIDTH',
  CONSTRAINED = 'CONSTRAINED'
}

export enum ImagePlaceholder {
  DOMINANT_COLOR = 'DOMINANT_COLOR',
  TRACED_SVG = 'TRACED_SVG',
  BLURRED = 'BLURRED',
  NONE = 'NONE'
}

export type ImageSharp = Node & {
  __typename?: 'ImageSharp';
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['JSON'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>;
  maxHeight?: Maybe<Scalars['Int']>;
  base64Width?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone?: Maybe<DuotoneGradient>;
  traceSVG?: Maybe<Potrace>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<ImageFormat>;
  toFormatBase64?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};


export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  placeholder?: Maybe<ImagePlaceholder>;
  blurredOptions?: Maybe<BlurredOptions>;
  tracedSVGOptions?: Maybe<Potrace>;
  formats?: Maybe<Array<Maybe<ImageFormat>>>;
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>;
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
  sizes?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  jpgOptions?: Maybe<JpgOptions>;
  pngOptions?: Maybe<PngOptions>;
  webpOptions?: Maybe<WebPOptions>;
  avifOptions?: Maybe<AvifOptions>;
  transformOptions?: Maybe<TransformOptions>;
  backgroundColor?: Maybe<Scalars['String']>;
};


export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegQuality?: Maybe<Scalars['Int']>;
  pngQuality?: Maybe<Scalars['Int']>;
  webpQuality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG?: Maybe<Potrace>;
  toFormat?: Maybe<ImageFormat>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
  __typename?: 'ImageSharpConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};


export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum;
};


export type ImageSharpConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
  __typename?: 'ImageSharpEdge';
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export enum ImageSharpFieldsEnum {
  fixed___base64 = 'fixed___base64',
  fixed___tracedSVG = 'fixed___tracedSVG',
  fixed___aspectRatio = 'fixed___aspectRatio',
  fixed___width = 'fixed___width',
  fixed___height = 'fixed___height',
  fixed___src = 'fixed___src',
  fixed___srcSet = 'fixed___srcSet',
  fixed___srcWebp = 'fixed___srcWebp',
  fixed___srcSetWebp = 'fixed___srcSetWebp',
  fixed___originalName = 'fixed___originalName',
  fluid___base64 = 'fluid___base64',
  fluid___tracedSVG = 'fluid___tracedSVG',
  fluid___aspectRatio = 'fluid___aspectRatio',
  fluid___src = 'fluid___src',
  fluid___srcSet = 'fluid___srcSet',
  fluid___srcWebp = 'fluid___srcWebp',
  fluid___srcSetWebp = 'fluid___srcSetWebp',
  fluid___sizes = 'fluid___sizes',
  fluid___originalImg = 'fluid___originalImg',
  fluid___originalName = 'fluid___originalName',
  fluid___presentationWidth = 'fluid___presentationWidth',
  fluid___presentationHeight = 'fluid___presentationHeight',
  gatsbyImageData = 'gatsbyImageData',
  original___width = 'original___width',
  original___height = 'original___height',
  original___src = 'original___src',
  resize___src = 'resize___src',
  resize___tracedSVG = 'resize___tracedSVG',
  resize___width = 'resize___width',
  resize___height = 'resize___height',
  resize___aspectRatio = 'resize___aspectRatio',
  resize___originalName = 'resize___originalName',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>;
};

export type ImageSharpFixed = {
  __typename?: 'ImageSharpFixed';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
  __typename?: 'ImageSharpFluid';
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
  srcSet?: Maybe<StringQueryOperatorInput>;
  srcWebp?: Maybe<StringQueryOperatorInput>;
  srcSetWebp?: Maybe<StringQueryOperatorInput>;
  sizes?: Maybe<StringQueryOperatorInput>;
  originalImg?: Maybe<StringQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
  presentationWidth?: Maybe<IntQueryOperatorInput>;
  presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
  __typename?: 'ImageSharpGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
  __typename?: 'ImageSharpOriginal';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>;
  height?: Maybe<FloatQueryOperatorInput>;
  src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
  __typename?: 'ImageSharpResize';
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>;
  tracedSVG?: Maybe<StringQueryOperatorInput>;
  width?: Maybe<IntQueryOperatorInput>;
  height?: Maybe<IntQueryOperatorInput>;
  aspectRatio?: Maybe<FloatQueryOperatorInput>;
  originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>;
  ne?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type Internal = {
  __typename?: 'Internal';
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
};

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>;
  contentDigest?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  fieldOwners?: Maybe<StringQueryOperatorInput>;
  ignoreType?: Maybe<BooleanQueryOperatorInput>;
  mediaType?: Maybe<StringQueryOperatorInput>;
  owner?: Maybe<StringQueryOperatorInput>;
  type?: Maybe<StringQueryOperatorInput>;
};

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>;
  progressive?: Maybe<Scalars['Boolean']>;
};


export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>;
  ne?: Maybe<Scalars['JSON']>;
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
  regex?: Maybe<Scalars['JSON']>;
  glob?: Maybe<Scalars['JSON']>;
};

export enum MarkdownExcerptFormats {
  PLAIN = 'PLAIN',
  HTML = 'HTML',
  MARKDOWN = 'MARKDOWN'
}

export type MarkdownHeading = {
  __typename?: 'MarkdownHeading';
  id?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
  depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  value?: Maybe<StringQueryOperatorInput>;
  depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export enum MarkdownHeadingLevels {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6'
}

export type MarkdownRemark = Node & {
  __typename?: 'MarkdownRemark';
  id: Scalars['ID'];
  frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  excerpt?: Maybe<Scalars['String']>;
  rawMarkdownBody?: Maybe<Scalars['String']>;
  fileAbsolutePath?: Maybe<Scalars['String']>;
  fields?: Maybe<MarkdownRemarkFields>;
  html?: Maybe<Scalars['String']>;
  htmlAst?: Maybe<Scalars['JSON']>;
  excerptAst?: Maybe<Scalars['JSON']>;
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
  timeToRead?: Maybe<Scalars['Int']>;
  tableOfContents?: Maybe<Scalars['String']>;
  wordCount?: Maybe<MarkdownWordCount>;
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type MarkdownRemarkExcerptArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
  format?: Maybe<MarkdownExcerptFormats>;
};


export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>;
  truncate?: Maybe<Scalars['Boolean']>;
};


export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>;
};


export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>;
  pathToSlugField?: Maybe<Scalars['String']>;
  maxDepth?: Maybe<Scalars['Int']>;
  heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
  __typename?: 'MarkdownRemarkConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkGroupConnection>;
};


export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum;
};


export type MarkdownRemarkConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
  __typename?: 'MarkdownRemarkEdge';
  next?: Maybe<MarkdownRemark>;
  node: MarkdownRemark;
  previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
  __typename?: 'MarkdownRemarkFields';
  locale?: Maybe<Scalars['String']>;
  templateKey?: Maybe<Scalars['String']>;
};

export enum MarkdownRemarkFieldsEnum {
  id = 'id',
  frontmatter___graphics___logo___sourceInstanceName = 'frontmatter___graphics___logo___sourceInstanceName',
  frontmatter___graphics___logo___absolutePath = 'frontmatter___graphics___logo___absolutePath',
  frontmatter___graphics___logo___relativePath = 'frontmatter___graphics___logo___relativePath',
  frontmatter___graphics___logo___extension = 'frontmatter___graphics___logo___extension',
  frontmatter___graphics___logo___size = 'frontmatter___graphics___logo___size',
  frontmatter___graphics___logo___prettySize = 'frontmatter___graphics___logo___prettySize',
  frontmatter___graphics___logo___modifiedTime = 'frontmatter___graphics___logo___modifiedTime',
  frontmatter___graphics___logo___accessTime = 'frontmatter___graphics___logo___accessTime',
  frontmatter___graphics___logo___changeTime = 'frontmatter___graphics___logo___changeTime',
  frontmatter___graphics___logo___birthTime = 'frontmatter___graphics___logo___birthTime',
  frontmatter___graphics___logo___root = 'frontmatter___graphics___logo___root',
  frontmatter___graphics___logo___dir = 'frontmatter___graphics___logo___dir',
  frontmatter___graphics___logo___base = 'frontmatter___graphics___logo___base',
  frontmatter___graphics___logo___ext = 'frontmatter___graphics___logo___ext',
  frontmatter___graphics___logo___name = 'frontmatter___graphics___logo___name',
  frontmatter___graphics___logo___relativeDirectory = 'frontmatter___graphics___logo___relativeDirectory',
  frontmatter___graphics___logo___dev = 'frontmatter___graphics___logo___dev',
  frontmatter___graphics___logo___mode = 'frontmatter___graphics___logo___mode',
  frontmatter___graphics___logo___nlink = 'frontmatter___graphics___logo___nlink',
  frontmatter___graphics___logo___uid = 'frontmatter___graphics___logo___uid',
  frontmatter___graphics___logo___gid = 'frontmatter___graphics___logo___gid',
  frontmatter___graphics___logo___rdev = 'frontmatter___graphics___logo___rdev',
  frontmatter___graphics___logo___ino = 'frontmatter___graphics___logo___ino',
  frontmatter___graphics___logo___atimeMs = 'frontmatter___graphics___logo___atimeMs',
  frontmatter___graphics___logo___mtimeMs = 'frontmatter___graphics___logo___mtimeMs',
  frontmatter___graphics___logo___ctimeMs = 'frontmatter___graphics___logo___ctimeMs',
  frontmatter___graphics___logo___atime = 'frontmatter___graphics___logo___atime',
  frontmatter___graphics___logo___mtime = 'frontmatter___graphics___logo___mtime',
  frontmatter___graphics___logo___ctime = 'frontmatter___graphics___logo___ctime',
  frontmatter___graphics___logo___birthtime = 'frontmatter___graphics___logo___birthtime',
  frontmatter___graphics___logo___birthtimeMs = 'frontmatter___graphics___logo___birthtimeMs',
  frontmatter___graphics___logo___blksize = 'frontmatter___graphics___logo___blksize',
  frontmatter___graphics___logo___blocks = 'frontmatter___graphics___logo___blocks',
  frontmatter___graphics___logo___publicURL = 'frontmatter___graphics___logo___publicURL',
  frontmatter___graphics___logo___childrenImageSharp = 'frontmatter___graphics___logo___childrenImageSharp',
  frontmatter___graphics___logo___childrenMarkdownRemark = 'frontmatter___graphics___logo___childrenMarkdownRemark',
  frontmatter___graphics___logo___id = 'frontmatter___graphics___logo___id',
  frontmatter___graphics___logo___children = 'frontmatter___graphics___logo___children',
  frontmatter___graphics___favicon___sourceInstanceName = 'frontmatter___graphics___favicon___sourceInstanceName',
  frontmatter___graphics___favicon___absolutePath = 'frontmatter___graphics___favicon___absolutePath',
  frontmatter___graphics___favicon___relativePath = 'frontmatter___graphics___favicon___relativePath',
  frontmatter___graphics___favicon___extension = 'frontmatter___graphics___favicon___extension',
  frontmatter___graphics___favicon___size = 'frontmatter___graphics___favicon___size',
  frontmatter___graphics___favicon___prettySize = 'frontmatter___graphics___favicon___prettySize',
  frontmatter___graphics___favicon___modifiedTime = 'frontmatter___graphics___favicon___modifiedTime',
  frontmatter___graphics___favicon___accessTime = 'frontmatter___graphics___favicon___accessTime',
  frontmatter___graphics___favicon___changeTime = 'frontmatter___graphics___favicon___changeTime',
  frontmatter___graphics___favicon___birthTime = 'frontmatter___graphics___favicon___birthTime',
  frontmatter___graphics___favicon___root = 'frontmatter___graphics___favicon___root',
  frontmatter___graphics___favicon___dir = 'frontmatter___graphics___favicon___dir',
  frontmatter___graphics___favicon___base = 'frontmatter___graphics___favicon___base',
  frontmatter___graphics___favicon___ext = 'frontmatter___graphics___favicon___ext',
  frontmatter___graphics___favicon___name = 'frontmatter___graphics___favicon___name',
  frontmatter___graphics___favicon___relativeDirectory = 'frontmatter___graphics___favicon___relativeDirectory',
  frontmatter___graphics___favicon___dev = 'frontmatter___graphics___favicon___dev',
  frontmatter___graphics___favicon___mode = 'frontmatter___graphics___favicon___mode',
  frontmatter___graphics___favicon___nlink = 'frontmatter___graphics___favicon___nlink',
  frontmatter___graphics___favicon___uid = 'frontmatter___graphics___favicon___uid',
  frontmatter___graphics___favicon___gid = 'frontmatter___graphics___favicon___gid',
  frontmatter___graphics___favicon___rdev = 'frontmatter___graphics___favicon___rdev',
  frontmatter___graphics___favicon___ino = 'frontmatter___graphics___favicon___ino',
  frontmatter___graphics___favicon___atimeMs = 'frontmatter___graphics___favicon___atimeMs',
  frontmatter___graphics___favicon___mtimeMs = 'frontmatter___graphics___favicon___mtimeMs',
  frontmatter___graphics___favicon___ctimeMs = 'frontmatter___graphics___favicon___ctimeMs',
  frontmatter___graphics___favicon___atime = 'frontmatter___graphics___favicon___atime',
  frontmatter___graphics___favicon___mtime = 'frontmatter___graphics___favicon___mtime',
  frontmatter___graphics___favicon___ctime = 'frontmatter___graphics___favicon___ctime',
  frontmatter___graphics___favicon___birthtime = 'frontmatter___graphics___favicon___birthtime',
  frontmatter___graphics___favicon___birthtimeMs = 'frontmatter___graphics___favicon___birthtimeMs',
  frontmatter___graphics___favicon___blksize = 'frontmatter___graphics___favicon___blksize',
  frontmatter___graphics___favicon___blocks = 'frontmatter___graphics___favicon___blocks',
  frontmatter___graphics___favicon___publicURL = 'frontmatter___graphics___favicon___publicURL',
  frontmatter___graphics___favicon___childrenImageSharp = 'frontmatter___graphics___favicon___childrenImageSharp',
  frontmatter___graphics___favicon___childrenMarkdownRemark = 'frontmatter___graphics___favicon___childrenMarkdownRemark',
  frontmatter___graphics___favicon___id = 'frontmatter___graphics___favicon___id',
  frontmatter___graphics___favicon___children = 'frontmatter___graphics___favicon___children',
  frontmatter___eventRooms = 'frontmatter___eventRooms',
  frontmatter___eventRooms___image___sourceInstanceName = 'frontmatter___eventRooms___image___sourceInstanceName',
  frontmatter___eventRooms___image___absolutePath = 'frontmatter___eventRooms___image___absolutePath',
  frontmatter___eventRooms___image___relativePath = 'frontmatter___eventRooms___image___relativePath',
  frontmatter___eventRooms___image___extension = 'frontmatter___eventRooms___image___extension',
  frontmatter___eventRooms___image___size = 'frontmatter___eventRooms___image___size',
  frontmatter___eventRooms___image___prettySize = 'frontmatter___eventRooms___image___prettySize',
  frontmatter___eventRooms___image___modifiedTime = 'frontmatter___eventRooms___image___modifiedTime',
  frontmatter___eventRooms___image___accessTime = 'frontmatter___eventRooms___image___accessTime',
  frontmatter___eventRooms___image___changeTime = 'frontmatter___eventRooms___image___changeTime',
  frontmatter___eventRooms___image___birthTime = 'frontmatter___eventRooms___image___birthTime',
  frontmatter___eventRooms___image___root = 'frontmatter___eventRooms___image___root',
  frontmatter___eventRooms___image___dir = 'frontmatter___eventRooms___image___dir',
  frontmatter___eventRooms___image___base = 'frontmatter___eventRooms___image___base',
  frontmatter___eventRooms___image___ext = 'frontmatter___eventRooms___image___ext',
  frontmatter___eventRooms___image___name = 'frontmatter___eventRooms___image___name',
  frontmatter___eventRooms___image___relativeDirectory = 'frontmatter___eventRooms___image___relativeDirectory',
  frontmatter___eventRooms___image___dev = 'frontmatter___eventRooms___image___dev',
  frontmatter___eventRooms___image___mode = 'frontmatter___eventRooms___image___mode',
  frontmatter___eventRooms___image___nlink = 'frontmatter___eventRooms___image___nlink',
  frontmatter___eventRooms___image___uid = 'frontmatter___eventRooms___image___uid',
  frontmatter___eventRooms___image___gid = 'frontmatter___eventRooms___image___gid',
  frontmatter___eventRooms___image___rdev = 'frontmatter___eventRooms___image___rdev',
  frontmatter___eventRooms___image___ino = 'frontmatter___eventRooms___image___ino',
  frontmatter___eventRooms___image___atimeMs = 'frontmatter___eventRooms___image___atimeMs',
  frontmatter___eventRooms___image___mtimeMs = 'frontmatter___eventRooms___image___mtimeMs',
  frontmatter___eventRooms___image___ctimeMs = 'frontmatter___eventRooms___image___ctimeMs',
  frontmatter___eventRooms___image___atime = 'frontmatter___eventRooms___image___atime',
  frontmatter___eventRooms___image___mtime = 'frontmatter___eventRooms___image___mtime',
  frontmatter___eventRooms___image___ctime = 'frontmatter___eventRooms___image___ctime',
  frontmatter___eventRooms___image___birthtime = 'frontmatter___eventRooms___image___birthtime',
  frontmatter___eventRooms___image___birthtimeMs = 'frontmatter___eventRooms___image___birthtimeMs',
  frontmatter___eventRooms___image___blksize = 'frontmatter___eventRooms___image___blksize',
  frontmatter___eventRooms___image___blocks = 'frontmatter___eventRooms___image___blocks',
  frontmatter___eventRooms___image___publicURL = 'frontmatter___eventRooms___image___publicURL',
  frontmatter___eventRooms___image___childrenImageSharp = 'frontmatter___eventRooms___image___childrenImageSharp',
  frontmatter___eventRooms___image___childrenMarkdownRemark = 'frontmatter___eventRooms___image___childrenMarkdownRemark',
  frontmatter___eventRooms___image___id = 'frontmatter___eventRooms___image___id',
  frontmatter___eventRooms___image___children = 'frontmatter___eventRooms___image___children',
  frontmatter___eventRooms___slug = 'frontmatter___eventRooms___slug',
  frontmatter___eventRooms___title = 'frontmatter___eventRooms___title',
  frontmatter___eventRooms___description = 'frontmatter___eventRooms___description',
  frontmatter___eventGraphics___favicon___sourceInstanceName = 'frontmatter___eventGraphics___favicon___sourceInstanceName',
  frontmatter___eventGraphics___favicon___absolutePath = 'frontmatter___eventGraphics___favicon___absolutePath',
  frontmatter___eventGraphics___favicon___relativePath = 'frontmatter___eventGraphics___favicon___relativePath',
  frontmatter___eventGraphics___favicon___extension = 'frontmatter___eventGraphics___favicon___extension',
  frontmatter___eventGraphics___favicon___size = 'frontmatter___eventGraphics___favicon___size',
  frontmatter___eventGraphics___favicon___prettySize = 'frontmatter___eventGraphics___favicon___prettySize',
  frontmatter___eventGraphics___favicon___modifiedTime = 'frontmatter___eventGraphics___favicon___modifiedTime',
  frontmatter___eventGraphics___favicon___accessTime = 'frontmatter___eventGraphics___favicon___accessTime',
  frontmatter___eventGraphics___favicon___changeTime = 'frontmatter___eventGraphics___favicon___changeTime',
  frontmatter___eventGraphics___favicon___birthTime = 'frontmatter___eventGraphics___favicon___birthTime',
  frontmatter___eventGraphics___favicon___root = 'frontmatter___eventGraphics___favicon___root',
  frontmatter___eventGraphics___favicon___dir = 'frontmatter___eventGraphics___favicon___dir',
  frontmatter___eventGraphics___favicon___base = 'frontmatter___eventGraphics___favicon___base',
  frontmatter___eventGraphics___favicon___ext = 'frontmatter___eventGraphics___favicon___ext',
  frontmatter___eventGraphics___favicon___name = 'frontmatter___eventGraphics___favicon___name',
  frontmatter___eventGraphics___favicon___relativeDirectory = 'frontmatter___eventGraphics___favicon___relativeDirectory',
  frontmatter___eventGraphics___favicon___dev = 'frontmatter___eventGraphics___favicon___dev',
  frontmatter___eventGraphics___favicon___mode = 'frontmatter___eventGraphics___favicon___mode',
  frontmatter___eventGraphics___favicon___nlink = 'frontmatter___eventGraphics___favicon___nlink',
  frontmatter___eventGraphics___favicon___uid = 'frontmatter___eventGraphics___favicon___uid',
  frontmatter___eventGraphics___favicon___gid = 'frontmatter___eventGraphics___favicon___gid',
  frontmatter___eventGraphics___favicon___rdev = 'frontmatter___eventGraphics___favicon___rdev',
  frontmatter___eventGraphics___favicon___ino = 'frontmatter___eventGraphics___favicon___ino',
  frontmatter___eventGraphics___favicon___atimeMs = 'frontmatter___eventGraphics___favicon___atimeMs',
  frontmatter___eventGraphics___favicon___mtimeMs = 'frontmatter___eventGraphics___favicon___mtimeMs',
  frontmatter___eventGraphics___favicon___ctimeMs = 'frontmatter___eventGraphics___favicon___ctimeMs',
  frontmatter___eventGraphics___favicon___atime = 'frontmatter___eventGraphics___favicon___atime',
  frontmatter___eventGraphics___favicon___mtime = 'frontmatter___eventGraphics___favicon___mtime',
  frontmatter___eventGraphics___favicon___ctime = 'frontmatter___eventGraphics___favicon___ctime',
  frontmatter___eventGraphics___favicon___birthtime = 'frontmatter___eventGraphics___favicon___birthtime',
  frontmatter___eventGraphics___favicon___birthtimeMs = 'frontmatter___eventGraphics___favicon___birthtimeMs',
  frontmatter___eventGraphics___favicon___blksize = 'frontmatter___eventGraphics___favicon___blksize',
  frontmatter___eventGraphics___favicon___blocks = 'frontmatter___eventGraphics___favicon___blocks',
  frontmatter___eventGraphics___favicon___publicURL = 'frontmatter___eventGraphics___favicon___publicURL',
  frontmatter___eventGraphics___favicon___childrenImageSharp = 'frontmatter___eventGraphics___favicon___childrenImageSharp',
  frontmatter___eventGraphics___favicon___childrenMarkdownRemark = 'frontmatter___eventGraphics___favicon___childrenMarkdownRemark',
  frontmatter___eventGraphics___favicon___id = 'frontmatter___eventGraphics___favicon___id',
  frontmatter___eventGraphics___favicon___children = 'frontmatter___eventGraphics___favicon___children',
  frontmatter___eventGraphics___headerLogo___sourceInstanceName = 'frontmatter___eventGraphics___headerLogo___sourceInstanceName',
  frontmatter___eventGraphics___headerLogo___absolutePath = 'frontmatter___eventGraphics___headerLogo___absolutePath',
  frontmatter___eventGraphics___headerLogo___relativePath = 'frontmatter___eventGraphics___headerLogo___relativePath',
  frontmatter___eventGraphics___headerLogo___extension = 'frontmatter___eventGraphics___headerLogo___extension',
  frontmatter___eventGraphics___headerLogo___size = 'frontmatter___eventGraphics___headerLogo___size',
  frontmatter___eventGraphics___headerLogo___prettySize = 'frontmatter___eventGraphics___headerLogo___prettySize',
  frontmatter___eventGraphics___headerLogo___modifiedTime = 'frontmatter___eventGraphics___headerLogo___modifiedTime',
  frontmatter___eventGraphics___headerLogo___accessTime = 'frontmatter___eventGraphics___headerLogo___accessTime',
  frontmatter___eventGraphics___headerLogo___changeTime = 'frontmatter___eventGraphics___headerLogo___changeTime',
  frontmatter___eventGraphics___headerLogo___birthTime = 'frontmatter___eventGraphics___headerLogo___birthTime',
  frontmatter___eventGraphics___headerLogo___root = 'frontmatter___eventGraphics___headerLogo___root',
  frontmatter___eventGraphics___headerLogo___dir = 'frontmatter___eventGraphics___headerLogo___dir',
  frontmatter___eventGraphics___headerLogo___base = 'frontmatter___eventGraphics___headerLogo___base',
  frontmatter___eventGraphics___headerLogo___ext = 'frontmatter___eventGraphics___headerLogo___ext',
  frontmatter___eventGraphics___headerLogo___name = 'frontmatter___eventGraphics___headerLogo___name',
  frontmatter___eventGraphics___headerLogo___relativeDirectory = 'frontmatter___eventGraphics___headerLogo___relativeDirectory',
  frontmatter___eventGraphics___headerLogo___dev = 'frontmatter___eventGraphics___headerLogo___dev',
  frontmatter___eventGraphics___headerLogo___mode = 'frontmatter___eventGraphics___headerLogo___mode',
  frontmatter___eventGraphics___headerLogo___nlink = 'frontmatter___eventGraphics___headerLogo___nlink',
  frontmatter___eventGraphics___headerLogo___uid = 'frontmatter___eventGraphics___headerLogo___uid',
  frontmatter___eventGraphics___headerLogo___gid = 'frontmatter___eventGraphics___headerLogo___gid',
  frontmatter___eventGraphics___headerLogo___rdev = 'frontmatter___eventGraphics___headerLogo___rdev',
  frontmatter___eventGraphics___headerLogo___ino = 'frontmatter___eventGraphics___headerLogo___ino',
  frontmatter___eventGraphics___headerLogo___atimeMs = 'frontmatter___eventGraphics___headerLogo___atimeMs',
  frontmatter___eventGraphics___headerLogo___mtimeMs = 'frontmatter___eventGraphics___headerLogo___mtimeMs',
  frontmatter___eventGraphics___headerLogo___ctimeMs = 'frontmatter___eventGraphics___headerLogo___ctimeMs',
  frontmatter___eventGraphics___headerLogo___atime = 'frontmatter___eventGraphics___headerLogo___atime',
  frontmatter___eventGraphics___headerLogo___mtime = 'frontmatter___eventGraphics___headerLogo___mtime',
  frontmatter___eventGraphics___headerLogo___ctime = 'frontmatter___eventGraphics___headerLogo___ctime',
  frontmatter___eventGraphics___headerLogo___birthtime = 'frontmatter___eventGraphics___headerLogo___birthtime',
  frontmatter___eventGraphics___headerLogo___birthtimeMs = 'frontmatter___eventGraphics___headerLogo___birthtimeMs',
  frontmatter___eventGraphics___headerLogo___blksize = 'frontmatter___eventGraphics___headerLogo___blksize',
  frontmatter___eventGraphics___headerLogo___blocks = 'frontmatter___eventGraphics___headerLogo___blocks',
  frontmatter___eventGraphics___headerLogo___publicURL = 'frontmatter___eventGraphics___headerLogo___publicURL',
  frontmatter___eventGraphics___headerLogo___childrenImageSharp = 'frontmatter___eventGraphics___headerLogo___childrenImageSharp',
  frontmatter___eventGraphics___headerLogo___childrenMarkdownRemark = 'frontmatter___eventGraphics___headerLogo___childrenMarkdownRemark',
  frontmatter___eventGraphics___headerLogo___id = 'frontmatter___eventGraphics___headerLogo___id',
  frontmatter___eventGraphics___headerLogo___children = 'frontmatter___eventGraphics___headerLogo___children',
  frontmatter___eventGraphics___lobbyImage___sourceInstanceName = 'frontmatter___eventGraphics___lobbyImage___sourceInstanceName',
  frontmatter___eventGraphics___lobbyImage___absolutePath = 'frontmatter___eventGraphics___lobbyImage___absolutePath',
  frontmatter___eventGraphics___lobbyImage___relativePath = 'frontmatter___eventGraphics___lobbyImage___relativePath',
  frontmatter___eventGraphics___lobbyImage___extension = 'frontmatter___eventGraphics___lobbyImage___extension',
  frontmatter___eventGraphics___lobbyImage___size = 'frontmatter___eventGraphics___lobbyImage___size',
  frontmatter___eventGraphics___lobbyImage___prettySize = 'frontmatter___eventGraphics___lobbyImage___prettySize',
  frontmatter___eventGraphics___lobbyImage___modifiedTime = 'frontmatter___eventGraphics___lobbyImage___modifiedTime',
  frontmatter___eventGraphics___lobbyImage___accessTime = 'frontmatter___eventGraphics___lobbyImage___accessTime',
  frontmatter___eventGraphics___lobbyImage___changeTime = 'frontmatter___eventGraphics___lobbyImage___changeTime',
  frontmatter___eventGraphics___lobbyImage___birthTime = 'frontmatter___eventGraphics___lobbyImage___birthTime',
  frontmatter___eventGraphics___lobbyImage___root = 'frontmatter___eventGraphics___lobbyImage___root',
  frontmatter___eventGraphics___lobbyImage___dir = 'frontmatter___eventGraphics___lobbyImage___dir',
  frontmatter___eventGraphics___lobbyImage___base = 'frontmatter___eventGraphics___lobbyImage___base',
  frontmatter___eventGraphics___lobbyImage___ext = 'frontmatter___eventGraphics___lobbyImage___ext',
  frontmatter___eventGraphics___lobbyImage___name = 'frontmatter___eventGraphics___lobbyImage___name',
  frontmatter___eventGraphics___lobbyImage___relativeDirectory = 'frontmatter___eventGraphics___lobbyImage___relativeDirectory',
  frontmatter___eventGraphics___lobbyImage___dev = 'frontmatter___eventGraphics___lobbyImage___dev',
  frontmatter___eventGraphics___lobbyImage___mode = 'frontmatter___eventGraphics___lobbyImage___mode',
  frontmatter___eventGraphics___lobbyImage___nlink = 'frontmatter___eventGraphics___lobbyImage___nlink',
  frontmatter___eventGraphics___lobbyImage___uid = 'frontmatter___eventGraphics___lobbyImage___uid',
  frontmatter___eventGraphics___lobbyImage___gid = 'frontmatter___eventGraphics___lobbyImage___gid',
  frontmatter___eventGraphics___lobbyImage___rdev = 'frontmatter___eventGraphics___lobbyImage___rdev',
  frontmatter___eventGraphics___lobbyImage___ino = 'frontmatter___eventGraphics___lobbyImage___ino',
  frontmatter___eventGraphics___lobbyImage___atimeMs = 'frontmatter___eventGraphics___lobbyImage___atimeMs',
  frontmatter___eventGraphics___lobbyImage___mtimeMs = 'frontmatter___eventGraphics___lobbyImage___mtimeMs',
  frontmatter___eventGraphics___lobbyImage___ctimeMs = 'frontmatter___eventGraphics___lobbyImage___ctimeMs',
  frontmatter___eventGraphics___lobbyImage___atime = 'frontmatter___eventGraphics___lobbyImage___atime',
  frontmatter___eventGraphics___lobbyImage___mtime = 'frontmatter___eventGraphics___lobbyImage___mtime',
  frontmatter___eventGraphics___lobbyImage___ctime = 'frontmatter___eventGraphics___lobbyImage___ctime',
  frontmatter___eventGraphics___lobbyImage___birthtime = 'frontmatter___eventGraphics___lobbyImage___birthtime',
  frontmatter___eventGraphics___lobbyImage___birthtimeMs = 'frontmatter___eventGraphics___lobbyImage___birthtimeMs',
  frontmatter___eventGraphics___lobbyImage___blksize = 'frontmatter___eventGraphics___lobbyImage___blksize',
  frontmatter___eventGraphics___lobbyImage___blocks = 'frontmatter___eventGraphics___lobbyImage___blocks',
  frontmatter___eventGraphics___lobbyImage___publicURL = 'frontmatter___eventGraphics___lobbyImage___publicURL',
  frontmatter___eventGraphics___lobbyImage___childrenImageSharp = 'frontmatter___eventGraphics___lobbyImage___childrenImageSharp',
  frontmatter___eventGraphics___lobbyImage___childrenMarkdownRemark = 'frontmatter___eventGraphics___lobbyImage___childrenMarkdownRemark',
  frontmatter___eventGraphics___lobbyImage___id = 'frontmatter___eventGraphics___lobbyImage___id',
  frontmatter___eventGraphics___lobbyImage___children = 'frontmatter___eventGraphics___lobbyImage___children',
  frontmatter___pageGraphics___featuredImage___sourceInstanceName = 'frontmatter___pageGraphics___featuredImage___sourceInstanceName',
  frontmatter___pageGraphics___featuredImage___absolutePath = 'frontmatter___pageGraphics___featuredImage___absolutePath',
  frontmatter___pageGraphics___featuredImage___relativePath = 'frontmatter___pageGraphics___featuredImage___relativePath',
  frontmatter___pageGraphics___featuredImage___extension = 'frontmatter___pageGraphics___featuredImage___extension',
  frontmatter___pageGraphics___featuredImage___size = 'frontmatter___pageGraphics___featuredImage___size',
  frontmatter___pageGraphics___featuredImage___prettySize = 'frontmatter___pageGraphics___featuredImage___prettySize',
  frontmatter___pageGraphics___featuredImage___modifiedTime = 'frontmatter___pageGraphics___featuredImage___modifiedTime',
  frontmatter___pageGraphics___featuredImage___accessTime = 'frontmatter___pageGraphics___featuredImage___accessTime',
  frontmatter___pageGraphics___featuredImage___changeTime = 'frontmatter___pageGraphics___featuredImage___changeTime',
  frontmatter___pageGraphics___featuredImage___birthTime = 'frontmatter___pageGraphics___featuredImage___birthTime',
  frontmatter___pageGraphics___featuredImage___root = 'frontmatter___pageGraphics___featuredImage___root',
  frontmatter___pageGraphics___featuredImage___dir = 'frontmatter___pageGraphics___featuredImage___dir',
  frontmatter___pageGraphics___featuredImage___base = 'frontmatter___pageGraphics___featuredImage___base',
  frontmatter___pageGraphics___featuredImage___ext = 'frontmatter___pageGraphics___featuredImage___ext',
  frontmatter___pageGraphics___featuredImage___name = 'frontmatter___pageGraphics___featuredImage___name',
  frontmatter___pageGraphics___featuredImage___relativeDirectory = 'frontmatter___pageGraphics___featuredImage___relativeDirectory',
  frontmatter___pageGraphics___featuredImage___dev = 'frontmatter___pageGraphics___featuredImage___dev',
  frontmatter___pageGraphics___featuredImage___mode = 'frontmatter___pageGraphics___featuredImage___mode',
  frontmatter___pageGraphics___featuredImage___nlink = 'frontmatter___pageGraphics___featuredImage___nlink',
  frontmatter___pageGraphics___featuredImage___uid = 'frontmatter___pageGraphics___featuredImage___uid',
  frontmatter___pageGraphics___featuredImage___gid = 'frontmatter___pageGraphics___featuredImage___gid',
  frontmatter___pageGraphics___featuredImage___rdev = 'frontmatter___pageGraphics___featuredImage___rdev',
  frontmatter___pageGraphics___featuredImage___ino = 'frontmatter___pageGraphics___featuredImage___ino',
  frontmatter___pageGraphics___featuredImage___atimeMs = 'frontmatter___pageGraphics___featuredImage___atimeMs',
  frontmatter___pageGraphics___featuredImage___mtimeMs = 'frontmatter___pageGraphics___featuredImage___mtimeMs',
  frontmatter___pageGraphics___featuredImage___ctimeMs = 'frontmatter___pageGraphics___featuredImage___ctimeMs',
  frontmatter___pageGraphics___featuredImage___atime = 'frontmatter___pageGraphics___featuredImage___atime',
  frontmatter___pageGraphics___featuredImage___mtime = 'frontmatter___pageGraphics___featuredImage___mtime',
  frontmatter___pageGraphics___featuredImage___ctime = 'frontmatter___pageGraphics___featuredImage___ctime',
  frontmatter___pageGraphics___featuredImage___birthtime = 'frontmatter___pageGraphics___featuredImage___birthtime',
  frontmatter___pageGraphics___featuredImage___birthtimeMs = 'frontmatter___pageGraphics___featuredImage___birthtimeMs',
  frontmatter___pageGraphics___featuredImage___blksize = 'frontmatter___pageGraphics___featuredImage___blksize',
  frontmatter___pageGraphics___featuredImage___blocks = 'frontmatter___pageGraphics___featuredImage___blocks',
  frontmatter___pageGraphics___featuredImage___publicURL = 'frontmatter___pageGraphics___featuredImage___publicURL',
  frontmatter___pageGraphics___featuredImage___childrenImageSharp = 'frontmatter___pageGraphics___featuredImage___childrenImageSharp',
  frontmatter___pageGraphics___featuredImage___childrenMarkdownRemark = 'frontmatter___pageGraphics___featuredImage___childrenMarkdownRemark',
  frontmatter___pageGraphics___featuredImage___id = 'frontmatter___pageGraphics___featuredImage___id',
  frontmatter___pageGraphics___featuredImage___children = 'frontmatter___pageGraphics___featuredImage___children',
  frontmatter___title = 'frontmatter___title',
  frontmatter___analyticsCookies___enabled = 'frontmatter___analyticsCookies___enabled',
  frontmatter___analyticsCookies___title = 'frontmatter___analyticsCookies___title',
  frontmatter___analyticsCookies___content = 'frontmatter___analyticsCookies___content',
  frontmatter___templateKey = 'frontmatter___templateKey',
  frontmatter___description = 'frontmatter___description',
  frontmatter___siteUrl = 'frontmatter___siteUrl',
  frontmatter___colors___primaryColor = 'frontmatter___colors___primaryColor',
  frontmatter___colors___primaryColorHover = 'frontmatter___colors___primaryColorHover',
  frontmatter___colors___darkModeOnColor = 'frontmatter___colors___darkModeOnColor',
  frontmatter___colors___darkModeOffColor = 'frontmatter___colors___darkModeOffColor',
  frontmatter___socialLogin___facebook = 'frontmatter___socialLogin___facebook',
  frontmatter___socialLogin___google = 'frontmatter___socialLogin___google',
  frontmatter___socialLogin___twitter = 'frontmatter___socialLogin___twitter',
  frontmatter___socialLogin___github = 'frontmatter___socialLogin___github',
  frontmatter___slug = 'frontmatter___slug',
  frontmatter___pageBranding___primaryColor = 'frontmatter___pageBranding___primaryColor',
  frontmatter___pageBranding___primaryColorHover = 'frontmatter___pageBranding___primaryColorHover',
  frontmatter___cookieNotification___title = 'frontmatter___cookieNotification___title',
  frontmatter___cookieNotification___content = 'frontmatter___cookieNotification___content',
  frontmatter___necessaryCookies___title = 'frontmatter___necessaryCookies___title',
  frontmatter___necessaryCookies___content = 'frontmatter___necessaryCookies___content',
  frontmatter___eventInformation___startTime___datetime = 'frontmatter___eventInformation___startTime___datetime',
  frontmatter___eventInformation___startTime___timezone = 'frontmatter___eventInformation___startTime___timezone',
  frontmatter___eventInformation___endTime___datetime = 'frontmatter___eventInformation___endTime___datetime',
  frontmatter___eventInformation___endTime___timezone = 'frontmatter___eventInformation___endTime___timezone',
  frontmatter___eventInformation___livestreamUrl = 'frontmatter___eventInformation___livestreamUrl',
  frontmatter___eventBranding___primaryColor = 'frontmatter___eventBranding___primaryColor',
  frontmatter___eventBranding___primaryColorHover = 'frontmatter___eventBranding___primaryColorHover',
  frontmatter___eventSettings___allEvents = 'frontmatter___eventSettings___allEvents',
  frontmatter___eventSettings___mainStage = 'frontmatter___eventSettings___mainStage',
  frontmatter___eventSettings___mainStageFeature = 'frontmatter___eventSettings___mainStageFeature',
  frontmatter___eventSettings___chat = 'frontmatter___eventSettings___chat',
  frontmatter___eventSettings___schedule = 'frontmatter___eventSettings___schedule',
  frontmatter___eventSettings___rooms = 'frontmatter___eventSettings___rooms',
  frontmatter___eventSettings___qa = 'frontmatter___eventSettings___qa',
  frontmatter___eventSettings___map = 'frontmatter___eventSettings___map',
  frontmatter___eventSettings___pollsLabel = 'frontmatter___eventSettings___pollsLabel',
  frontmatter___eventSettings___qaLabel = 'frontmatter___eventSettings___qaLabel',
  frontmatter___eventSettings___mainStageLabel = 'frontmatter___eventSettings___mainStageLabel',
  frontmatter___eventSettings___polls = 'frontmatter___eventSettings___polls',
  frontmatter___eventSettings___mapLabel = 'frontmatter___eventSettings___mapLabel',
  frontmatter___eventSettings___allEventsLabel = 'frontmatter___eventSettings___allEventsLabel',
  frontmatter___eventSettings___chatLabel = 'frontmatter___eventSettings___chatLabel',
  frontmatter___eventSettings___roomsLabel = 'frontmatter___eventSettings___roomsLabel',
  frontmatter___eventSettings___scheduleLabel = 'frontmatter___eventSettings___scheduleLabel',
  frontmatter___eventSchedule = 'frontmatter___eventSchedule',
  frontmatter___eventSchedule___startTime___datetime = 'frontmatter___eventSchedule___startTime___datetime',
  frontmatter___eventSchedule___startTime___timezone = 'frontmatter___eventSchedule___startTime___timezone',
  frontmatter___eventSchedule___title = 'frontmatter___eventSchedule___title',
  frontmatter___eventSchedule___description = 'frontmatter___eventSchedule___description',
  frontmatter___eventQA = 'frontmatter___eventQA',
  frontmatter___eventQA___question = 'frontmatter___eventQA___question',
  frontmatter___eventQA___answer = 'frontmatter___eventQA___answer',
  frontmatter___id = 'frontmatter___id',
  frontmatter___parent___id = 'frontmatter___parent___id',
  frontmatter___parent___parent___id = 'frontmatter___parent___parent___id',
  frontmatter___parent___parent___children = 'frontmatter___parent___parent___children',
  frontmatter___parent___children = 'frontmatter___parent___children',
  frontmatter___parent___children___id = 'frontmatter___parent___children___id',
  frontmatter___parent___children___children = 'frontmatter___parent___children___children',
  frontmatter___parent___internal___content = 'frontmatter___parent___internal___content',
  frontmatter___parent___internal___contentDigest = 'frontmatter___parent___internal___contentDigest',
  frontmatter___parent___internal___description = 'frontmatter___parent___internal___description',
  frontmatter___parent___internal___fieldOwners = 'frontmatter___parent___internal___fieldOwners',
  frontmatter___parent___internal___ignoreType = 'frontmatter___parent___internal___ignoreType',
  frontmatter___parent___internal___mediaType = 'frontmatter___parent___internal___mediaType',
  frontmatter___parent___internal___owner = 'frontmatter___parent___internal___owner',
  frontmatter___parent___internal___type = 'frontmatter___parent___internal___type',
  frontmatter___children = 'frontmatter___children',
  frontmatter___children___id = 'frontmatter___children___id',
  frontmatter___children___parent___id = 'frontmatter___children___parent___id',
  frontmatter___children___parent___children = 'frontmatter___children___parent___children',
  frontmatter___children___children = 'frontmatter___children___children',
  frontmatter___children___children___id = 'frontmatter___children___children___id',
  frontmatter___children___children___children = 'frontmatter___children___children___children',
  frontmatter___children___internal___content = 'frontmatter___children___internal___content',
  frontmatter___children___internal___contentDigest = 'frontmatter___children___internal___contentDigest',
  frontmatter___children___internal___description = 'frontmatter___children___internal___description',
  frontmatter___children___internal___fieldOwners = 'frontmatter___children___internal___fieldOwners',
  frontmatter___children___internal___ignoreType = 'frontmatter___children___internal___ignoreType',
  frontmatter___children___internal___mediaType = 'frontmatter___children___internal___mediaType',
  frontmatter___children___internal___owner = 'frontmatter___children___internal___owner',
  frontmatter___children___internal___type = 'frontmatter___children___internal___type',
  frontmatter___internal___content = 'frontmatter___internal___content',
  frontmatter___internal___contentDigest = 'frontmatter___internal___contentDigest',
  frontmatter___internal___description = 'frontmatter___internal___description',
  frontmatter___internal___fieldOwners = 'frontmatter___internal___fieldOwners',
  frontmatter___internal___ignoreType = 'frontmatter___internal___ignoreType',
  frontmatter___internal___mediaType = 'frontmatter___internal___mediaType',
  frontmatter___internal___owner = 'frontmatter___internal___owner',
  frontmatter___internal___type = 'frontmatter___internal___type',
  excerpt = 'excerpt',
  rawMarkdownBody = 'rawMarkdownBody',
  fileAbsolutePath = 'fileAbsolutePath',
  fields___locale = 'fields___locale',
  fields___templateKey = 'fields___templateKey',
  html = 'html',
  htmlAst = 'htmlAst',
  excerptAst = 'excerptAst',
  headings = 'headings',
  headings___id = 'headings___id',
  headings___value = 'headings___value',
  headings___depth = 'headings___depth',
  timeToRead = 'timeToRead',
  tableOfContents = 'tableOfContents',
  wordCount___paragraphs = 'wordCount___paragraphs',
  wordCount___sentences = 'wordCount___sentences',
  wordCount___words = 'wordCount___words',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type MarkdownRemarkFieldsFilterInput = {
  locale?: Maybe<StringQueryOperatorInput>;
  templateKey?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFilterInput>;
};

export type MarkdownRemarkFrontmatter = Node & {
  __typename?: 'MarkdownRemarkFrontmatter';
  graphics?: Maybe<MarkdownRemarkFrontmatterGraphics>;
  eventRooms?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterEventRoom>>>;
  eventGraphics?: Maybe<MarkdownRemarkFrontmatterEventGraphics>;
  pageGraphics?: Maybe<MarkdownRemarkFrontmatterPageGraphics>;
  title?: Maybe<Scalars['String']>;
  analyticsCookies?: Maybe<MarkdownRemarkFrontmatterAnalyticsCookies>;
  templateKey?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
  colors?: Maybe<MarkdownRemarkFrontmatterColors>;
  socialLogin?: Maybe<MarkdownRemarkFrontmatterSocialLogin>;
  slug?: Maybe<Scalars['String']>;
  pageBranding?: Maybe<MarkdownRemarkFrontmatterPageBranding>;
  cookieNotification?: Maybe<MarkdownRemarkFrontmatterCookieNotification>;
  necessaryCookies?: Maybe<MarkdownRemarkFrontmatterNecessaryCookies>;
  eventInformation?: Maybe<MarkdownRemarkFrontmatterEventInformation>;
  eventBranding?: Maybe<MarkdownRemarkFrontmatterEventBranding>;
  eventSettings?: Maybe<MarkdownRemarkFrontmatterEventSettings>;
  eventSchedule?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterEventSchedule>>>;
  eventQA?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterEventQa>>>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type MarkdownRemarkFrontmatterAnalyticsCookies = {
  __typename?: 'MarkdownRemarkFrontmatterAnalyticsCookies';
  enabled?: Maybe<Scalars['Boolean']>;
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterAnalyticsCookiesFilterInput = {
  enabled?: Maybe<BooleanQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterColors = {
  __typename?: 'MarkdownRemarkFrontmatterColors';
  primaryColor?: Maybe<Scalars['String']>;
  primaryColorHover?: Maybe<Scalars['String']>;
  darkModeOnColor?: Maybe<Scalars['String']>;
  darkModeOffColor?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterColorsFilterInput = {
  primaryColor?: Maybe<StringQueryOperatorInput>;
  primaryColorHover?: Maybe<StringQueryOperatorInput>;
  darkModeOnColor?: Maybe<StringQueryOperatorInput>;
  darkModeOffColor?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterConnection = {
  __typename?: 'MarkdownRemarkFrontmatterConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkFrontmatterEdge>;
  nodes: Array<MarkdownRemarkFrontmatter>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<MarkdownRemarkFrontmatterGroupConnection>;
};


export type MarkdownRemarkFrontmatterConnectionDistinctArgs = {
  field: MarkdownRemarkFrontmatterFieldsEnum;
};


export type MarkdownRemarkFrontmatterConnectionMaxArgs = {
  field: MarkdownRemarkFrontmatterFieldsEnum;
};


export type MarkdownRemarkFrontmatterConnectionMinArgs = {
  field: MarkdownRemarkFrontmatterFieldsEnum;
};


export type MarkdownRemarkFrontmatterConnectionSumArgs = {
  field: MarkdownRemarkFrontmatterFieldsEnum;
};


export type MarkdownRemarkFrontmatterConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: MarkdownRemarkFrontmatterFieldsEnum;
};

export type MarkdownRemarkFrontmatterCookieNotification = {
  __typename?: 'MarkdownRemarkFrontmatterCookieNotification';
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterCookieNotificationFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterEdge = {
  __typename?: 'MarkdownRemarkFrontmatterEdge';
  next?: Maybe<MarkdownRemarkFrontmatter>;
  node: MarkdownRemarkFrontmatter;
  previous?: Maybe<MarkdownRemarkFrontmatter>;
};

export type MarkdownRemarkFrontmatterEventBranding = {
  __typename?: 'MarkdownRemarkFrontmatterEventBranding';
  primaryColor?: Maybe<Scalars['String']>;
  primaryColorHover?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterEventBrandingFilterInput = {
  primaryColor?: Maybe<StringQueryOperatorInput>;
  primaryColorHover?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterEventGraphics = {
  __typename?: 'MarkdownRemarkFrontmatterEventGraphics';
  favicon?: Maybe<File>;
  headerLogo?: Maybe<File>;
  lobbyImage?: Maybe<File>;
};

export type MarkdownRemarkFrontmatterEventGraphicsFilterInput = {
  favicon?: Maybe<FileFilterInput>;
  headerLogo?: Maybe<FileFilterInput>;
  lobbyImage?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkFrontmatterEventInformation = {
  __typename?: 'MarkdownRemarkFrontmatterEventInformation';
  startTime?: Maybe<MarkdownRemarkFrontmatterEventInformationStartTime>;
  endTime?: Maybe<MarkdownRemarkFrontmatterEventInformationEndTime>;
  livestreamUrl?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterEventInformationEndTime = {
  __typename?: 'MarkdownRemarkFrontmatterEventInformationEndTime';
  datetime?: Maybe<Scalars['Date']>;
  timezone?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterEventInformationEndTimeDatetimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterEventInformationEndTimeFilterInput = {
  datetime?: Maybe<DateQueryOperatorInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterEventInformationFilterInput = {
  startTime?: Maybe<MarkdownRemarkFrontmatterEventInformationStartTimeFilterInput>;
  endTime?: Maybe<MarkdownRemarkFrontmatterEventInformationEndTimeFilterInput>;
  livestreamUrl?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterEventInformationStartTime = {
  __typename?: 'MarkdownRemarkFrontmatterEventInformationStartTime';
  datetime?: Maybe<Scalars['Date']>;
  timezone?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterEventInformationStartTimeDatetimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterEventInformationStartTimeFilterInput = {
  datetime?: Maybe<DateQueryOperatorInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterEventQa = {
  __typename?: 'MarkdownRemarkFrontmatterEventQA';
  question?: Maybe<Scalars['String']>;
  answer?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterEventQaFilterInput = {
  question?: Maybe<StringQueryOperatorInput>;
  answer?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterEventQaFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterEventQaFilterInput>;
};

export type MarkdownRemarkFrontmatterEventRoom = {
  __typename?: 'MarkdownRemarkFrontmatterEventRoom';
  image?: Maybe<File>;
  slug: Scalars['String'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterEventRoomFilterInput = {
  image?: Maybe<FileFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterEventRoomFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterEventRoomFilterInput>;
};

export type MarkdownRemarkFrontmatterEventSchedule = {
  __typename?: 'MarkdownRemarkFrontmatterEventSchedule';
  startTime?: Maybe<MarkdownRemarkFrontmatterEventScheduleStartTime>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterEventScheduleFilterInput = {
  startTime?: Maybe<MarkdownRemarkFrontmatterEventScheduleStartTimeFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterEventScheduleFilterListInput = {
  elemMatch?: Maybe<MarkdownRemarkFrontmatterEventScheduleFilterInput>;
};

export type MarkdownRemarkFrontmatterEventScheduleStartTime = {
  __typename?: 'MarkdownRemarkFrontmatterEventScheduleStartTime';
  datetime?: Maybe<Scalars['Date']>;
  timezone?: Maybe<Scalars['String']>;
};


export type MarkdownRemarkFrontmatterEventScheduleStartTimeDatetimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterEventScheduleStartTimeFilterInput = {
  datetime?: Maybe<DateQueryOperatorInput>;
  timezone?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterEventSettings = {
  __typename?: 'MarkdownRemarkFrontmatterEventSettings';
  allEvents?: Maybe<Scalars['Boolean']>;
  mainStage?: Maybe<Scalars['Boolean']>;
  mainStageFeature?: Maybe<Scalars['String']>;
  chat?: Maybe<Scalars['Boolean']>;
  schedule?: Maybe<Scalars['Boolean']>;
  rooms?: Maybe<Scalars['Boolean']>;
  qa?: Maybe<Scalars['Boolean']>;
  map?: Maybe<Scalars['Boolean']>;
  pollsLabel?: Maybe<Scalars['String']>;
  qaLabel?: Maybe<Scalars['String']>;
  mainStageLabel?: Maybe<Scalars['String']>;
  polls?: Maybe<Scalars['Boolean']>;
  mapLabel?: Maybe<Scalars['String']>;
  allEventsLabel?: Maybe<Scalars['String']>;
  chatLabel?: Maybe<Scalars['String']>;
  roomsLabel?: Maybe<Scalars['String']>;
  scheduleLabel?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterEventSettingsFilterInput = {
  allEvents?: Maybe<BooleanQueryOperatorInput>;
  mainStage?: Maybe<BooleanQueryOperatorInput>;
  mainStageFeature?: Maybe<StringQueryOperatorInput>;
  chat?: Maybe<BooleanQueryOperatorInput>;
  schedule?: Maybe<BooleanQueryOperatorInput>;
  rooms?: Maybe<BooleanQueryOperatorInput>;
  qa?: Maybe<BooleanQueryOperatorInput>;
  map?: Maybe<BooleanQueryOperatorInput>;
  pollsLabel?: Maybe<StringQueryOperatorInput>;
  qaLabel?: Maybe<StringQueryOperatorInput>;
  mainStageLabel?: Maybe<StringQueryOperatorInput>;
  polls?: Maybe<BooleanQueryOperatorInput>;
  mapLabel?: Maybe<StringQueryOperatorInput>;
  allEventsLabel?: Maybe<StringQueryOperatorInput>;
  chatLabel?: Maybe<StringQueryOperatorInput>;
  roomsLabel?: Maybe<StringQueryOperatorInput>;
  scheduleLabel?: Maybe<StringQueryOperatorInput>;
};

export enum MarkdownRemarkFrontmatterFieldsEnum {
  graphics___logo___sourceInstanceName = 'graphics___logo___sourceInstanceName',
  graphics___logo___absolutePath = 'graphics___logo___absolutePath',
  graphics___logo___relativePath = 'graphics___logo___relativePath',
  graphics___logo___extension = 'graphics___logo___extension',
  graphics___logo___size = 'graphics___logo___size',
  graphics___logo___prettySize = 'graphics___logo___prettySize',
  graphics___logo___modifiedTime = 'graphics___logo___modifiedTime',
  graphics___logo___accessTime = 'graphics___logo___accessTime',
  graphics___logo___changeTime = 'graphics___logo___changeTime',
  graphics___logo___birthTime = 'graphics___logo___birthTime',
  graphics___logo___root = 'graphics___logo___root',
  graphics___logo___dir = 'graphics___logo___dir',
  graphics___logo___base = 'graphics___logo___base',
  graphics___logo___ext = 'graphics___logo___ext',
  graphics___logo___name = 'graphics___logo___name',
  graphics___logo___relativeDirectory = 'graphics___logo___relativeDirectory',
  graphics___logo___dev = 'graphics___logo___dev',
  graphics___logo___mode = 'graphics___logo___mode',
  graphics___logo___nlink = 'graphics___logo___nlink',
  graphics___logo___uid = 'graphics___logo___uid',
  graphics___logo___gid = 'graphics___logo___gid',
  graphics___logo___rdev = 'graphics___logo___rdev',
  graphics___logo___ino = 'graphics___logo___ino',
  graphics___logo___atimeMs = 'graphics___logo___atimeMs',
  graphics___logo___mtimeMs = 'graphics___logo___mtimeMs',
  graphics___logo___ctimeMs = 'graphics___logo___ctimeMs',
  graphics___logo___atime = 'graphics___logo___atime',
  graphics___logo___mtime = 'graphics___logo___mtime',
  graphics___logo___ctime = 'graphics___logo___ctime',
  graphics___logo___birthtime = 'graphics___logo___birthtime',
  graphics___logo___birthtimeMs = 'graphics___logo___birthtimeMs',
  graphics___logo___blksize = 'graphics___logo___blksize',
  graphics___logo___blocks = 'graphics___logo___blocks',
  graphics___logo___publicURL = 'graphics___logo___publicURL',
  graphics___logo___childrenImageSharp = 'graphics___logo___childrenImageSharp',
  graphics___logo___childrenImageSharp___gatsbyImageData = 'graphics___logo___childrenImageSharp___gatsbyImageData',
  graphics___logo___childrenImageSharp___id = 'graphics___logo___childrenImageSharp___id',
  graphics___logo___childrenImageSharp___children = 'graphics___logo___childrenImageSharp___children',
  graphics___logo___childImageSharp___gatsbyImageData = 'graphics___logo___childImageSharp___gatsbyImageData',
  graphics___logo___childImageSharp___id = 'graphics___logo___childImageSharp___id',
  graphics___logo___childImageSharp___children = 'graphics___logo___childImageSharp___children',
  graphics___logo___childrenMarkdownRemark = 'graphics___logo___childrenMarkdownRemark',
  graphics___logo___childrenMarkdownRemark___id = 'graphics___logo___childrenMarkdownRemark___id',
  graphics___logo___childrenMarkdownRemark___excerpt = 'graphics___logo___childrenMarkdownRemark___excerpt',
  graphics___logo___childrenMarkdownRemark___rawMarkdownBody = 'graphics___logo___childrenMarkdownRemark___rawMarkdownBody',
  graphics___logo___childrenMarkdownRemark___fileAbsolutePath = 'graphics___logo___childrenMarkdownRemark___fileAbsolutePath',
  graphics___logo___childrenMarkdownRemark___html = 'graphics___logo___childrenMarkdownRemark___html',
  graphics___logo___childrenMarkdownRemark___htmlAst = 'graphics___logo___childrenMarkdownRemark___htmlAst',
  graphics___logo___childrenMarkdownRemark___excerptAst = 'graphics___logo___childrenMarkdownRemark___excerptAst',
  graphics___logo___childrenMarkdownRemark___headings = 'graphics___logo___childrenMarkdownRemark___headings',
  graphics___logo___childrenMarkdownRemark___timeToRead = 'graphics___logo___childrenMarkdownRemark___timeToRead',
  graphics___logo___childrenMarkdownRemark___tableOfContents = 'graphics___logo___childrenMarkdownRemark___tableOfContents',
  graphics___logo___childrenMarkdownRemark___children = 'graphics___logo___childrenMarkdownRemark___children',
  graphics___logo___childMarkdownRemark___id = 'graphics___logo___childMarkdownRemark___id',
  graphics___logo___childMarkdownRemark___excerpt = 'graphics___logo___childMarkdownRemark___excerpt',
  graphics___logo___childMarkdownRemark___rawMarkdownBody = 'graphics___logo___childMarkdownRemark___rawMarkdownBody',
  graphics___logo___childMarkdownRemark___fileAbsolutePath = 'graphics___logo___childMarkdownRemark___fileAbsolutePath',
  graphics___logo___childMarkdownRemark___html = 'graphics___logo___childMarkdownRemark___html',
  graphics___logo___childMarkdownRemark___htmlAst = 'graphics___logo___childMarkdownRemark___htmlAst',
  graphics___logo___childMarkdownRemark___excerptAst = 'graphics___logo___childMarkdownRemark___excerptAst',
  graphics___logo___childMarkdownRemark___headings = 'graphics___logo___childMarkdownRemark___headings',
  graphics___logo___childMarkdownRemark___timeToRead = 'graphics___logo___childMarkdownRemark___timeToRead',
  graphics___logo___childMarkdownRemark___tableOfContents = 'graphics___logo___childMarkdownRemark___tableOfContents',
  graphics___logo___childMarkdownRemark___children = 'graphics___logo___childMarkdownRemark___children',
  graphics___logo___id = 'graphics___logo___id',
  graphics___logo___parent___id = 'graphics___logo___parent___id',
  graphics___logo___parent___children = 'graphics___logo___parent___children',
  graphics___logo___children = 'graphics___logo___children',
  graphics___logo___children___id = 'graphics___logo___children___id',
  graphics___logo___children___children = 'graphics___logo___children___children',
  graphics___logo___internal___content = 'graphics___logo___internal___content',
  graphics___logo___internal___contentDigest = 'graphics___logo___internal___contentDigest',
  graphics___logo___internal___description = 'graphics___logo___internal___description',
  graphics___logo___internal___fieldOwners = 'graphics___logo___internal___fieldOwners',
  graphics___logo___internal___ignoreType = 'graphics___logo___internal___ignoreType',
  graphics___logo___internal___mediaType = 'graphics___logo___internal___mediaType',
  graphics___logo___internal___owner = 'graphics___logo___internal___owner',
  graphics___logo___internal___type = 'graphics___logo___internal___type',
  graphics___favicon___sourceInstanceName = 'graphics___favicon___sourceInstanceName',
  graphics___favicon___absolutePath = 'graphics___favicon___absolutePath',
  graphics___favicon___relativePath = 'graphics___favicon___relativePath',
  graphics___favicon___extension = 'graphics___favicon___extension',
  graphics___favicon___size = 'graphics___favicon___size',
  graphics___favicon___prettySize = 'graphics___favicon___prettySize',
  graphics___favicon___modifiedTime = 'graphics___favicon___modifiedTime',
  graphics___favicon___accessTime = 'graphics___favicon___accessTime',
  graphics___favicon___changeTime = 'graphics___favicon___changeTime',
  graphics___favicon___birthTime = 'graphics___favicon___birthTime',
  graphics___favicon___root = 'graphics___favicon___root',
  graphics___favicon___dir = 'graphics___favicon___dir',
  graphics___favicon___base = 'graphics___favicon___base',
  graphics___favicon___ext = 'graphics___favicon___ext',
  graphics___favicon___name = 'graphics___favicon___name',
  graphics___favicon___relativeDirectory = 'graphics___favicon___relativeDirectory',
  graphics___favicon___dev = 'graphics___favicon___dev',
  graphics___favicon___mode = 'graphics___favicon___mode',
  graphics___favicon___nlink = 'graphics___favicon___nlink',
  graphics___favicon___uid = 'graphics___favicon___uid',
  graphics___favicon___gid = 'graphics___favicon___gid',
  graphics___favicon___rdev = 'graphics___favicon___rdev',
  graphics___favicon___ino = 'graphics___favicon___ino',
  graphics___favicon___atimeMs = 'graphics___favicon___atimeMs',
  graphics___favicon___mtimeMs = 'graphics___favicon___mtimeMs',
  graphics___favicon___ctimeMs = 'graphics___favicon___ctimeMs',
  graphics___favicon___atime = 'graphics___favicon___atime',
  graphics___favicon___mtime = 'graphics___favicon___mtime',
  graphics___favicon___ctime = 'graphics___favicon___ctime',
  graphics___favicon___birthtime = 'graphics___favicon___birthtime',
  graphics___favicon___birthtimeMs = 'graphics___favicon___birthtimeMs',
  graphics___favicon___blksize = 'graphics___favicon___blksize',
  graphics___favicon___blocks = 'graphics___favicon___blocks',
  graphics___favicon___publicURL = 'graphics___favicon___publicURL',
  graphics___favicon___childrenImageSharp = 'graphics___favicon___childrenImageSharp',
  graphics___favicon___childrenImageSharp___gatsbyImageData = 'graphics___favicon___childrenImageSharp___gatsbyImageData',
  graphics___favicon___childrenImageSharp___id = 'graphics___favicon___childrenImageSharp___id',
  graphics___favicon___childrenImageSharp___children = 'graphics___favicon___childrenImageSharp___children',
  graphics___favicon___childImageSharp___gatsbyImageData = 'graphics___favicon___childImageSharp___gatsbyImageData',
  graphics___favicon___childImageSharp___id = 'graphics___favicon___childImageSharp___id',
  graphics___favicon___childImageSharp___children = 'graphics___favicon___childImageSharp___children',
  graphics___favicon___childrenMarkdownRemark = 'graphics___favicon___childrenMarkdownRemark',
  graphics___favicon___childrenMarkdownRemark___id = 'graphics___favicon___childrenMarkdownRemark___id',
  graphics___favicon___childrenMarkdownRemark___excerpt = 'graphics___favicon___childrenMarkdownRemark___excerpt',
  graphics___favicon___childrenMarkdownRemark___rawMarkdownBody = 'graphics___favicon___childrenMarkdownRemark___rawMarkdownBody',
  graphics___favicon___childrenMarkdownRemark___fileAbsolutePath = 'graphics___favicon___childrenMarkdownRemark___fileAbsolutePath',
  graphics___favicon___childrenMarkdownRemark___html = 'graphics___favicon___childrenMarkdownRemark___html',
  graphics___favicon___childrenMarkdownRemark___htmlAst = 'graphics___favicon___childrenMarkdownRemark___htmlAst',
  graphics___favicon___childrenMarkdownRemark___excerptAst = 'graphics___favicon___childrenMarkdownRemark___excerptAst',
  graphics___favicon___childrenMarkdownRemark___headings = 'graphics___favicon___childrenMarkdownRemark___headings',
  graphics___favicon___childrenMarkdownRemark___timeToRead = 'graphics___favicon___childrenMarkdownRemark___timeToRead',
  graphics___favicon___childrenMarkdownRemark___tableOfContents = 'graphics___favicon___childrenMarkdownRemark___tableOfContents',
  graphics___favicon___childrenMarkdownRemark___children = 'graphics___favicon___childrenMarkdownRemark___children',
  graphics___favicon___childMarkdownRemark___id = 'graphics___favicon___childMarkdownRemark___id',
  graphics___favicon___childMarkdownRemark___excerpt = 'graphics___favicon___childMarkdownRemark___excerpt',
  graphics___favicon___childMarkdownRemark___rawMarkdownBody = 'graphics___favicon___childMarkdownRemark___rawMarkdownBody',
  graphics___favicon___childMarkdownRemark___fileAbsolutePath = 'graphics___favicon___childMarkdownRemark___fileAbsolutePath',
  graphics___favicon___childMarkdownRemark___html = 'graphics___favicon___childMarkdownRemark___html',
  graphics___favicon___childMarkdownRemark___htmlAst = 'graphics___favicon___childMarkdownRemark___htmlAst',
  graphics___favicon___childMarkdownRemark___excerptAst = 'graphics___favicon___childMarkdownRemark___excerptAst',
  graphics___favicon___childMarkdownRemark___headings = 'graphics___favicon___childMarkdownRemark___headings',
  graphics___favicon___childMarkdownRemark___timeToRead = 'graphics___favicon___childMarkdownRemark___timeToRead',
  graphics___favicon___childMarkdownRemark___tableOfContents = 'graphics___favicon___childMarkdownRemark___tableOfContents',
  graphics___favicon___childMarkdownRemark___children = 'graphics___favicon___childMarkdownRemark___children',
  graphics___favicon___id = 'graphics___favicon___id',
  graphics___favicon___parent___id = 'graphics___favicon___parent___id',
  graphics___favicon___parent___children = 'graphics___favicon___parent___children',
  graphics___favicon___children = 'graphics___favicon___children',
  graphics___favicon___children___id = 'graphics___favicon___children___id',
  graphics___favicon___children___children = 'graphics___favicon___children___children',
  graphics___favicon___internal___content = 'graphics___favicon___internal___content',
  graphics___favicon___internal___contentDigest = 'graphics___favicon___internal___contentDigest',
  graphics___favicon___internal___description = 'graphics___favicon___internal___description',
  graphics___favicon___internal___fieldOwners = 'graphics___favicon___internal___fieldOwners',
  graphics___favicon___internal___ignoreType = 'graphics___favicon___internal___ignoreType',
  graphics___favicon___internal___mediaType = 'graphics___favicon___internal___mediaType',
  graphics___favicon___internal___owner = 'graphics___favicon___internal___owner',
  graphics___favicon___internal___type = 'graphics___favicon___internal___type',
  eventRooms = 'eventRooms',
  eventRooms___image___sourceInstanceName = 'eventRooms___image___sourceInstanceName',
  eventRooms___image___absolutePath = 'eventRooms___image___absolutePath',
  eventRooms___image___relativePath = 'eventRooms___image___relativePath',
  eventRooms___image___extension = 'eventRooms___image___extension',
  eventRooms___image___size = 'eventRooms___image___size',
  eventRooms___image___prettySize = 'eventRooms___image___prettySize',
  eventRooms___image___modifiedTime = 'eventRooms___image___modifiedTime',
  eventRooms___image___accessTime = 'eventRooms___image___accessTime',
  eventRooms___image___changeTime = 'eventRooms___image___changeTime',
  eventRooms___image___birthTime = 'eventRooms___image___birthTime',
  eventRooms___image___root = 'eventRooms___image___root',
  eventRooms___image___dir = 'eventRooms___image___dir',
  eventRooms___image___base = 'eventRooms___image___base',
  eventRooms___image___ext = 'eventRooms___image___ext',
  eventRooms___image___name = 'eventRooms___image___name',
  eventRooms___image___relativeDirectory = 'eventRooms___image___relativeDirectory',
  eventRooms___image___dev = 'eventRooms___image___dev',
  eventRooms___image___mode = 'eventRooms___image___mode',
  eventRooms___image___nlink = 'eventRooms___image___nlink',
  eventRooms___image___uid = 'eventRooms___image___uid',
  eventRooms___image___gid = 'eventRooms___image___gid',
  eventRooms___image___rdev = 'eventRooms___image___rdev',
  eventRooms___image___ino = 'eventRooms___image___ino',
  eventRooms___image___atimeMs = 'eventRooms___image___atimeMs',
  eventRooms___image___mtimeMs = 'eventRooms___image___mtimeMs',
  eventRooms___image___ctimeMs = 'eventRooms___image___ctimeMs',
  eventRooms___image___atime = 'eventRooms___image___atime',
  eventRooms___image___mtime = 'eventRooms___image___mtime',
  eventRooms___image___ctime = 'eventRooms___image___ctime',
  eventRooms___image___birthtime = 'eventRooms___image___birthtime',
  eventRooms___image___birthtimeMs = 'eventRooms___image___birthtimeMs',
  eventRooms___image___blksize = 'eventRooms___image___blksize',
  eventRooms___image___blocks = 'eventRooms___image___blocks',
  eventRooms___image___publicURL = 'eventRooms___image___publicURL',
  eventRooms___image___childrenImageSharp = 'eventRooms___image___childrenImageSharp',
  eventRooms___image___childrenImageSharp___gatsbyImageData = 'eventRooms___image___childrenImageSharp___gatsbyImageData',
  eventRooms___image___childrenImageSharp___id = 'eventRooms___image___childrenImageSharp___id',
  eventRooms___image___childrenImageSharp___children = 'eventRooms___image___childrenImageSharp___children',
  eventRooms___image___childImageSharp___gatsbyImageData = 'eventRooms___image___childImageSharp___gatsbyImageData',
  eventRooms___image___childImageSharp___id = 'eventRooms___image___childImageSharp___id',
  eventRooms___image___childImageSharp___children = 'eventRooms___image___childImageSharp___children',
  eventRooms___image___childrenMarkdownRemark = 'eventRooms___image___childrenMarkdownRemark',
  eventRooms___image___childrenMarkdownRemark___id = 'eventRooms___image___childrenMarkdownRemark___id',
  eventRooms___image___childrenMarkdownRemark___excerpt = 'eventRooms___image___childrenMarkdownRemark___excerpt',
  eventRooms___image___childrenMarkdownRemark___rawMarkdownBody = 'eventRooms___image___childrenMarkdownRemark___rawMarkdownBody',
  eventRooms___image___childrenMarkdownRemark___fileAbsolutePath = 'eventRooms___image___childrenMarkdownRemark___fileAbsolutePath',
  eventRooms___image___childrenMarkdownRemark___html = 'eventRooms___image___childrenMarkdownRemark___html',
  eventRooms___image___childrenMarkdownRemark___htmlAst = 'eventRooms___image___childrenMarkdownRemark___htmlAst',
  eventRooms___image___childrenMarkdownRemark___excerptAst = 'eventRooms___image___childrenMarkdownRemark___excerptAst',
  eventRooms___image___childrenMarkdownRemark___headings = 'eventRooms___image___childrenMarkdownRemark___headings',
  eventRooms___image___childrenMarkdownRemark___timeToRead = 'eventRooms___image___childrenMarkdownRemark___timeToRead',
  eventRooms___image___childrenMarkdownRemark___tableOfContents = 'eventRooms___image___childrenMarkdownRemark___tableOfContents',
  eventRooms___image___childrenMarkdownRemark___children = 'eventRooms___image___childrenMarkdownRemark___children',
  eventRooms___image___childMarkdownRemark___id = 'eventRooms___image___childMarkdownRemark___id',
  eventRooms___image___childMarkdownRemark___excerpt = 'eventRooms___image___childMarkdownRemark___excerpt',
  eventRooms___image___childMarkdownRemark___rawMarkdownBody = 'eventRooms___image___childMarkdownRemark___rawMarkdownBody',
  eventRooms___image___childMarkdownRemark___fileAbsolutePath = 'eventRooms___image___childMarkdownRemark___fileAbsolutePath',
  eventRooms___image___childMarkdownRemark___html = 'eventRooms___image___childMarkdownRemark___html',
  eventRooms___image___childMarkdownRemark___htmlAst = 'eventRooms___image___childMarkdownRemark___htmlAst',
  eventRooms___image___childMarkdownRemark___excerptAst = 'eventRooms___image___childMarkdownRemark___excerptAst',
  eventRooms___image___childMarkdownRemark___headings = 'eventRooms___image___childMarkdownRemark___headings',
  eventRooms___image___childMarkdownRemark___timeToRead = 'eventRooms___image___childMarkdownRemark___timeToRead',
  eventRooms___image___childMarkdownRemark___tableOfContents = 'eventRooms___image___childMarkdownRemark___tableOfContents',
  eventRooms___image___childMarkdownRemark___children = 'eventRooms___image___childMarkdownRemark___children',
  eventRooms___image___id = 'eventRooms___image___id',
  eventRooms___image___parent___id = 'eventRooms___image___parent___id',
  eventRooms___image___parent___children = 'eventRooms___image___parent___children',
  eventRooms___image___children = 'eventRooms___image___children',
  eventRooms___image___children___id = 'eventRooms___image___children___id',
  eventRooms___image___children___children = 'eventRooms___image___children___children',
  eventRooms___image___internal___content = 'eventRooms___image___internal___content',
  eventRooms___image___internal___contentDigest = 'eventRooms___image___internal___contentDigest',
  eventRooms___image___internal___description = 'eventRooms___image___internal___description',
  eventRooms___image___internal___fieldOwners = 'eventRooms___image___internal___fieldOwners',
  eventRooms___image___internal___ignoreType = 'eventRooms___image___internal___ignoreType',
  eventRooms___image___internal___mediaType = 'eventRooms___image___internal___mediaType',
  eventRooms___image___internal___owner = 'eventRooms___image___internal___owner',
  eventRooms___image___internal___type = 'eventRooms___image___internal___type',
  eventRooms___slug = 'eventRooms___slug',
  eventRooms___title = 'eventRooms___title',
  eventRooms___description = 'eventRooms___description',
  eventGraphics___favicon___sourceInstanceName = 'eventGraphics___favicon___sourceInstanceName',
  eventGraphics___favicon___absolutePath = 'eventGraphics___favicon___absolutePath',
  eventGraphics___favicon___relativePath = 'eventGraphics___favicon___relativePath',
  eventGraphics___favicon___extension = 'eventGraphics___favicon___extension',
  eventGraphics___favicon___size = 'eventGraphics___favicon___size',
  eventGraphics___favicon___prettySize = 'eventGraphics___favicon___prettySize',
  eventGraphics___favicon___modifiedTime = 'eventGraphics___favicon___modifiedTime',
  eventGraphics___favicon___accessTime = 'eventGraphics___favicon___accessTime',
  eventGraphics___favicon___changeTime = 'eventGraphics___favicon___changeTime',
  eventGraphics___favicon___birthTime = 'eventGraphics___favicon___birthTime',
  eventGraphics___favicon___root = 'eventGraphics___favicon___root',
  eventGraphics___favicon___dir = 'eventGraphics___favicon___dir',
  eventGraphics___favicon___base = 'eventGraphics___favicon___base',
  eventGraphics___favicon___ext = 'eventGraphics___favicon___ext',
  eventGraphics___favicon___name = 'eventGraphics___favicon___name',
  eventGraphics___favicon___relativeDirectory = 'eventGraphics___favicon___relativeDirectory',
  eventGraphics___favicon___dev = 'eventGraphics___favicon___dev',
  eventGraphics___favicon___mode = 'eventGraphics___favicon___mode',
  eventGraphics___favicon___nlink = 'eventGraphics___favicon___nlink',
  eventGraphics___favicon___uid = 'eventGraphics___favicon___uid',
  eventGraphics___favicon___gid = 'eventGraphics___favicon___gid',
  eventGraphics___favicon___rdev = 'eventGraphics___favicon___rdev',
  eventGraphics___favicon___ino = 'eventGraphics___favicon___ino',
  eventGraphics___favicon___atimeMs = 'eventGraphics___favicon___atimeMs',
  eventGraphics___favicon___mtimeMs = 'eventGraphics___favicon___mtimeMs',
  eventGraphics___favicon___ctimeMs = 'eventGraphics___favicon___ctimeMs',
  eventGraphics___favicon___atime = 'eventGraphics___favicon___atime',
  eventGraphics___favicon___mtime = 'eventGraphics___favicon___mtime',
  eventGraphics___favicon___ctime = 'eventGraphics___favicon___ctime',
  eventGraphics___favicon___birthtime = 'eventGraphics___favicon___birthtime',
  eventGraphics___favicon___birthtimeMs = 'eventGraphics___favicon___birthtimeMs',
  eventGraphics___favicon___blksize = 'eventGraphics___favicon___blksize',
  eventGraphics___favicon___blocks = 'eventGraphics___favicon___blocks',
  eventGraphics___favicon___publicURL = 'eventGraphics___favicon___publicURL',
  eventGraphics___favicon___childrenImageSharp = 'eventGraphics___favicon___childrenImageSharp',
  eventGraphics___favicon___childrenImageSharp___gatsbyImageData = 'eventGraphics___favicon___childrenImageSharp___gatsbyImageData',
  eventGraphics___favicon___childrenImageSharp___id = 'eventGraphics___favicon___childrenImageSharp___id',
  eventGraphics___favicon___childrenImageSharp___children = 'eventGraphics___favicon___childrenImageSharp___children',
  eventGraphics___favicon___childImageSharp___gatsbyImageData = 'eventGraphics___favicon___childImageSharp___gatsbyImageData',
  eventGraphics___favicon___childImageSharp___id = 'eventGraphics___favicon___childImageSharp___id',
  eventGraphics___favicon___childImageSharp___children = 'eventGraphics___favicon___childImageSharp___children',
  eventGraphics___favicon___childrenMarkdownRemark = 'eventGraphics___favicon___childrenMarkdownRemark',
  eventGraphics___favicon___childrenMarkdownRemark___id = 'eventGraphics___favicon___childrenMarkdownRemark___id',
  eventGraphics___favicon___childrenMarkdownRemark___excerpt = 'eventGraphics___favicon___childrenMarkdownRemark___excerpt',
  eventGraphics___favicon___childrenMarkdownRemark___rawMarkdownBody = 'eventGraphics___favicon___childrenMarkdownRemark___rawMarkdownBody',
  eventGraphics___favicon___childrenMarkdownRemark___fileAbsolutePath = 'eventGraphics___favicon___childrenMarkdownRemark___fileAbsolutePath',
  eventGraphics___favicon___childrenMarkdownRemark___html = 'eventGraphics___favicon___childrenMarkdownRemark___html',
  eventGraphics___favicon___childrenMarkdownRemark___htmlAst = 'eventGraphics___favicon___childrenMarkdownRemark___htmlAst',
  eventGraphics___favicon___childrenMarkdownRemark___excerptAst = 'eventGraphics___favicon___childrenMarkdownRemark___excerptAst',
  eventGraphics___favicon___childrenMarkdownRemark___headings = 'eventGraphics___favicon___childrenMarkdownRemark___headings',
  eventGraphics___favicon___childrenMarkdownRemark___timeToRead = 'eventGraphics___favicon___childrenMarkdownRemark___timeToRead',
  eventGraphics___favicon___childrenMarkdownRemark___tableOfContents = 'eventGraphics___favicon___childrenMarkdownRemark___tableOfContents',
  eventGraphics___favicon___childrenMarkdownRemark___children = 'eventGraphics___favicon___childrenMarkdownRemark___children',
  eventGraphics___favicon___childMarkdownRemark___id = 'eventGraphics___favicon___childMarkdownRemark___id',
  eventGraphics___favicon___childMarkdownRemark___excerpt = 'eventGraphics___favicon___childMarkdownRemark___excerpt',
  eventGraphics___favicon___childMarkdownRemark___rawMarkdownBody = 'eventGraphics___favicon___childMarkdownRemark___rawMarkdownBody',
  eventGraphics___favicon___childMarkdownRemark___fileAbsolutePath = 'eventGraphics___favicon___childMarkdownRemark___fileAbsolutePath',
  eventGraphics___favicon___childMarkdownRemark___html = 'eventGraphics___favicon___childMarkdownRemark___html',
  eventGraphics___favicon___childMarkdownRemark___htmlAst = 'eventGraphics___favicon___childMarkdownRemark___htmlAst',
  eventGraphics___favicon___childMarkdownRemark___excerptAst = 'eventGraphics___favicon___childMarkdownRemark___excerptAst',
  eventGraphics___favicon___childMarkdownRemark___headings = 'eventGraphics___favicon___childMarkdownRemark___headings',
  eventGraphics___favicon___childMarkdownRemark___timeToRead = 'eventGraphics___favicon___childMarkdownRemark___timeToRead',
  eventGraphics___favicon___childMarkdownRemark___tableOfContents = 'eventGraphics___favicon___childMarkdownRemark___tableOfContents',
  eventGraphics___favicon___childMarkdownRemark___children = 'eventGraphics___favicon___childMarkdownRemark___children',
  eventGraphics___favicon___id = 'eventGraphics___favicon___id',
  eventGraphics___favicon___parent___id = 'eventGraphics___favicon___parent___id',
  eventGraphics___favicon___parent___children = 'eventGraphics___favicon___parent___children',
  eventGraphics___favicon___children = 'eventGraphics___favicon___children',
  eventGraphics___favicon___children___id = 'eventGraphics___favicon___children___id',
  eventGraphics___favicon___children___children = 'eventGraphics___favicon___children___children',
  eventGraphics___favicon___internal___content = 'eventGraphics___favicon___internal___content',
  eventGraphics___favicon___internal___contentDigest = 'eventGraphics___favicon___internal___contentDigest',
  eventGraphics___favicon___internal___description = 'eventGraphics___favicon___internal___description',
  eventGraphics___favicon___internal___fieldOwners = 'eventGraphics___favicon___internal___fieldOwners',
  eventGraphics___favicon___internal___ignoreType = 'eventGraphics___favicon___internal___ignoreType',
  eventGraphics___favicon___internal___mediaType = 'eventGraphics___favicon___internal___mediaType',
  eventGraphics___favicon___internal___owner = 'eventGraphics___favicon___internal___owner',
  eventGraphics___favicon___internal___type = 'eventGraphics___favicon___internal___type',
  eventGraphics___headerLogo___sourceInstanceName = 'eventGraphics___headerLogo___sourceInstanceName',
  eventGraphics___headerLogo___absolutePath = 'eventGraphics___headerLogo___absolutePath',
  eventGraphics___headerLogo___relativePath = 'eventGraphics___headerLogo___relativePath',
  eventGraphics___headerLogo___extension = 'eventGraphics___headerLogo___extension',
  eventGraphics___headerLogo___size = 'eventGraphics___headerLogo___size',
  eventGraphics___headerLogo___prettySize = 'eventGraphics___headerLogo___prettySize',
  eventGraphics___headerLogo___modifiedTime = 'eventGraphics___headerLogo___modifiedTime',
  eventGraphics___headerLogo___accessTime = 'eventGraphics___headerLogo___accessTime',
  eventGraphics___headerLogo___changeTime = 'eventGraphics___headerLogo___changeTime',
  eventGraphics___headerLogo___birthTime = 'eventGraphics___headerLogo___birthTime',
  eventGraphics___headerLogo___root = 'eventGraphics___headerLogo___root',
  eventGraphics___headerLogo___dir = 'eventGraphics___headerLogo___dir',
  eventGraphics___headerLogo___base = 'eventGraphics___headerLogo___base',
  eventGraphics___headerLogo___ext = 'eventGraphics___headerLogo___ext',
  eventGraphics___headerLogo___name = 'eventGraphics___headerLogo___name',
  eventGraphics___headerLogo___relativeDirectory = 'eventGraphics___headerLogo___relativeDirectory',
  eventGraphics___headerLogo___dev = 'eventGraphics___headerLogo___dev',
  eventGraphics___headerLogo___mode = 'eventGraphics___headerLogo___mode',
  eventGraphics___headerLogo___nlink = 'eventGraphics___headerLogo___nlink',
  eventGraphics___headerLogo___uid = 'eventGraphics___headerLogo___uid',
  eventGraphics___headerLogo___gid = 'eventGraphics___headerLogo___gid',
  eventGraphics___headerLogo___rdev = 'eventGraphics___headerLogo___rdev',
  eventGraphics___headerLogo___ino = 'eventGraphics___headerLogo___ino',
  eventGraphics___headerLogo___atimeMs = 'eventGraphics___headerLogo___atimeMs',
  eventGraphics___headerLogo___mtimeMs = 'eventGraphics___headerLogo___mtimeMs',
  eventGraphics___headerLogo___ctimeMs = 'eventGraphics___headerLogo___ctimeMs',
  eventGraphics___headerLogo___atime = 'eventGraphics___headerLogo___atime',
  eventGraphics___headerLogo___mtime = 'eventGraphics___headerLogo___mtime',
  eventGraphics___headerLogo___ctime = 'eventGraphics___headerLogo___ctime',
  eventGraphics___headerLogo___birthtime = 'eventGraphics___headerLogo___birthtime',
  eventGraphics___headerLogo___birthtimeMs = 'eventGraphics___headerLogo___birthtimeMs',
  eventGraphics___headerLogo___blksize = 'eventGraphics___headerLogo___blksize',
  eventGraphics___headerLogo___blocks = 'eventGraphics___headerLogo___blocks',
  eventGraphics___headerLogo___publicURL = 'eventGraphics___headerLogo___publicURL',
  eventGraphics___headerLogo___childrenImageSharp = 'eventGraphics___headerLogo___childrenImageSharp',
  eventGraphics___headerLogo___childrenImageSharp___gatsbyImageData = 'eventGraphics___headerLogo___childrenImageSharp___gatsbyImageData',
  eventGraphics___headerLogo___childrenImageSharp___id = 'eventGraphics___headerLogo___childrenImageSharp___id',
  eventGraphics___headerLogo___childrenImageSharp___children = 'eventGraphics___headerLogo___childrenImageSharp___children',
  eventGraphics___headerLogo___childImageSharp___gatsbyImageData = 'eventGraphics___headerLogo___childImageSharp___gatsbyImageData',
  eventGraphics___headerLogo___childImageSharp___id = 'eventGraphics___headerLogo___childImageSharp___id',
  eventGraphics___headerLogo___childImageSharp___children = 'eventGraphics___headerLogo___childImageSharp___children',
  eventGraphics___headerLogo___childrenMarkdownRemark = 'eventGraphics___headerLogo___childrenMarkdownRemark',
  eventGraphics___headerLogo___childrenMarkdownRemark___id = 'eventGraphics___headerLogo___childrenMarkdownRemark___id',
  eventGraphics___headerLogo___childrenMarkdownRemark___excerpt = 'eventGraphics___headerLogo___childrenMarkdownRemark___excerpt',
  eventGraphics___headerLogo___childrenMarkdownRemark___rawMarkdownBody = 'eventGraphics___headerLogo___childrenMarkdownRemark___rawMarkdownBody',
  eventGraphics___headerLogo___childrenMarkdownRemark___fileAbsolutePath = 'eventGraphics___headerLogo___childrenMarkdownRemark___fileAbsolutePath',
  eventGraphics___headerLogo___childrenMarkdownRemark___html = 'eventGraphics___headerLogo___childrenMarkdownRemark___html',
  eventGraphics___headerLogo___childrenMarkdownRemark___htmlAst = 'eventGraphics___headerLogo___childrenMarkdownRemark___htmlAst',
  eventGraphics___headerLogo___childrenMarkdownRemark___excerptAst = 'eventGraphics___headerLogo___childrenMarkdownRemark___excerptAst',
  eventGraphics___headerLogo___childrenMarkdownRemark___headings = 'eventGraphics___headerLogo___childrenMarkdownRemark___headings',
  eventGraphics___headerLogo___childrenMarkdownRemark___timeToRead = 'eventGraphics___headerLogo___childrenMarkdownRemark___timeToRead',
  eventGraphics___headerLogo___childrenMarkdownRemark___tableOfContents = 'eventGraphics___headerLogo___childrenMarkdownRemark___tableOfContents',
  eventGraphics___headerLogo___childrenMarkdownRemark___children = 'eventGraphics___headerLogo___childrenMarkdownRemark___children',
  eventGraphics___headerLogo___childMarkdownRemark___id = 'eventGraphics___headerLogo___childMarkdownRemark___id',
  eventGraphics___headerLogo___childMarkdownRemark___excerpt = 'eventGraphics___headerLogo___childMarkdownRemark___excerpt',
  eventGraphics___headerLogo___childMarkdownRemark___rawMarkdownBody = 'eventGraphics___headerLogo___childMarkdownRemark___rawMarkdownBody',
  eventGraphics___headerLogo___childMarkdownRemark___fileAbsolutePath = 'eventGraphics___headerLogo___childMarkdownRemark___fileAbsolutePath',
  eventGraphics___headerLogo___childMarkdownRemark___html = 'eventGraphics___headerLogo___childMarkdownRemark___html',
  eventGraphics___headerLogo___childMarkdownRemark___htmlAst = 'eventGraphics___headerLogo___childMarkdownRemark___htmlAst',
  eventGraphics___headerLogo___childMarkdownRemark___excerptAst = 'eventGraphics___headerLogo___childMarkdownRemark___excerptAst',
  eventGraphics___headerLogo___childMarkdownRemark___headings = 'eventGraphics___headerLogo___childMarkdownRemark___headings',
  eventGraphics___headerLogo___childMarkdownRemark___timeToRead = 'eventGraphics___headerLogo___childMarkdownRemark___timeToRead',
  eventGraphics___headerLogo___childMarkdownRemark___tableOfContents = 'eventGraphics___headerLogo___childMarkdownRemark___tableOfContents',
  eventGraphics___headerLogo___childMarkdownRemark___children = 'eventGraphics___headerLogo___childMarkdownRemark___children',
  eventGraphics___headerLogo___id = 'eventGraphics___headerLogo___id',
  eventGraphics___headerLogo___parent___id = 'eventGraphics___headerLogo___parent___id',
  eventGraphics___headerLogo___parent___children = 'eventGraphics___headerLogo___parent___children',
  eventGraphics___headerLogo___children = 'eventGraphics___headerLogo___children',
  eventGraphics___headerLogo___children___id = 'eventGraphics___headerLogo___children___id',
  eventGraphics___headerLogo___children___children = 'eventGraphics___headerLogo___children___children',
  eventGraphics___headerLogo___internal___content = 'eventGraphics___headerLogo___internal___content',
  eventGraphics___headerLogo___internal___contentDigest = 'eventGraphics___headerLogo___internal___contentDigest',
  eventGraphics___headerLogo___internal___description = 'eventGraphics___headerLogo___internal___description',
  eventGraphics___headerLogo___internal___fieldOwners = 'eventGraphics___headerLogo___internal___fieldOwners',
  eventGraphics___headerLogo___internal___ignoreType = 'eventGraphics___headerLogo___internal___ignoreType',
  eventGraphics___headerLogo___internal___mediaType = 'eventGraphics___headerLogo___internal___mediaType',
  eventGraphics___headerLogo___internal___owner = 'eventGraphics___headerLogo___internal___owner',
  eventGraphics___headerLogo___internal___type = 'eventGraphics___headerLogo___internal___type',
  eventGraphics___lobbyImage___sourceInstanceName = 'eventGraphics___lobbyImage___sourceInstanceName',
  eventGraphics___lobbyImage___absolutePath = 'eventGraphics___lobbyImage___absolutePath',
  eventGraphics___lobbyImage___relativePath = 'eventGraphics___lobbyImage___relativePath',
  eventGraphics___lobbyImage___extension = 'eventGraphics___lobbyImage___extension',
  eventGraphics___lobbyImage___size = 'eventGraphics___lobbyImage___size',
  eventGraphics___lobbyImage___prettySize = 'eventGraphics___lobbyImage___prettySize',
  eventGraphics___lobbyImage___modifiedTime = 'eventGraphics___lobbyImage___modifiedTime',
  eventGraphics___lobbyImage___accessTime = 'eventGraphics___lobbyImage___accessTime',
  eventGraphics___lobbyImage___changeTime = 'eventGraphics___lobbyImage___changeTime',
  eventGraphics___lobbyImage___birthTime = 'eventGraphics___lobbyImage___birthTime',
  eventGraphics___lobbyImage___root = 'eventGraphics___lobbyImage___root',
  eventGraphics___lobbyImage___dir = 'eventGraphics___lobbyImage___dir',
  eventGraphics___lobbyImage___base = 'eventGraphics___lobbyImage___base',
  eventGraphics___lobbyImage___ext = 'eventGraphics___lobbyImage___ext',
  eventGraphics___lobbyImage___name = 'eventGraphics___lobbyImage___name',
  eventGraphics___lobbyImage___relativeDirectory = 'eventGraphics___lobbyImage___relativeDirectory',
  eventGraphics___lobbyImage___dev = 'eventGraphics___lobbyImage___dev',
  eventGraphics___lobbyImage___mode = 'eventGraphics___lobbyImage___mode',
  eventGraphics___lobbyImage___nlink = 'eventGraphics___lobbyImage___nlink',
  eventGraphics___lobbyImage___uid = 'eventGraphics___lobbyImage___uid',
  eventGraphics___lobbyImage___gid = 'eventGraphics___lobbyImage___gid',
  eventGraphics___lobbyImage___rdev = 'eventGraphics___lobbyImage___rdev',
  eventGraphics___lobbyImage___ino = 'eventGraphics___lobbyImage___ino',
  eventGraphics___lobbyImage___atimeMs = 'eventGraphics___lobbyImage___atimeMs',
  eventGraphics___lobbyImage___mtimeMs = 'eventGraphics___lobbyImage___mtimeMs',
  eventGraphics___lobbyImage___ctimeMs = 'eventGraphics___lobbyImage___ctimeMs',
  eventGraphics___lobbyImage___atime = 'eventGraphics___lobbyImage___atime',
  eventGraphics___lobbyImage___mtime = 'eventGraphics___lobbyImage___mtime',
  eventGraphics___lobbyImage___ctime = 'eventGraphics___lobbyImage___ctime',
  eventGraphics___lobbyImage___birthtime = 'eventGraphics___lobbyImage___birthtime',
  eventGraphics___lobbyImage___birthtimeMs = 'eventGraphics___lobbyImage___birthtimeMs',
  eventGraphics___lobbyImage___blksize = 'eventGraphics___lobbyImage___blksize',
  eventGraphics___lobbyImage___blocks = 'eventGraphics___lobbyImage___blocks',
  eventGraphics___lobbyImage___publicURL = 'eventGraphics___lobbyImage___publicURL',
  eventGraphics___lobbyImage___childrenImageSharp = 'eventGraphics___lobbyImage___childrenImageSharp',
  eventGraphics___lobbyImage___childrenImageSharp___gatsbyImageData = 'eventGraphics___lobbyImage___childrenImageSharp___gatsbyImageData',
  eventGraphics___lobbyImage___childrenImageSharp___id = 'eventGraphics___lobbyImage___childrenImageSharp___id',
  eventGraphics___lobbyImage___childrenImageSharp___children = 'eventGraphics___lobbyImage___childrenImageSharp___children',
  eventGraphics___lobbyImage___childImageSharp___gatsbyImageData = 'eventGraphics___lobbyImage___childImageSharp___gatsbyImageData',
  eventGraphics___lobbyImage___childImageSharp___id = 'eventGraphics___lobbyImage___childImageSharp___id',
  eventGraphics___lobbyImage___childImageSharp___children = 'eventGraphics___lobbyImage___childImageSharp___children',
  eventGraphics___lobbyImage___childrenMarkdownRemark = 'eventGraphics___lobbyImage___childrenMarkdownRemark',
  eventGraphics___lobbyImage___childrenMarkdownRemark___id = 'eventGraphics___lobbyImage___childrenMarkdownRemark___id',
  eventGraphics___lobbyImage___childrenMarkdownRemark___excerpt = 'eventGraphics___lobbyImage___childrenMarkdownRemark___excerpt',
  eventGraphics___lobbyImage___childrenMarkdownRemark___rawMarkdownBody = 'eventGraphics___lobbyImage___childrenMarkdownRemark___rawMarkdownBody',
  eventGraphics___lobbyImage___childrenMarkdownRemark___fileAbsolutePath = 'eventGraphics___lobbyImage___childrenMarkdownRemark___fileAbsolutePath',
  eventGraphics___lobbyImage___childrenMarkdownRemark___html = 'eventGraphics___lobbyImage___childrenMarkdownRemark___html',
  eventGraphics___lobbyImage___childrenMarkdownRemark___htmlAst = 'eventGraphics___lobbyImage___childrenMarkdownRemark___htmlAst',
  eventGraphics___lobbyImage___childrenMarkdownRemark___excerptAst = 'eventGraphics___lobbyImage___childrenMarkdownRemark___excerptAst',
  eventGraphics___lobbyImage___childrenMarkdownRemark___headings = 'eventGraphics___lobbyImage___childrenMarkdownRemark___headings',
  eventGraphics___lobbyImage___childrenMarkdownRemark___timeToRead = 'eventGraphics___lobbyImage___childrenMarkdownRemark___timeToRead',
  eventGraphics___lobbyImage___childrenMarkdownRemark___tableOfContents = 'eventGraphics___lobbyImage___childrenMarkdownRemark___tableOfContents',
  eventGraphics___lobbyImage___childrenMarkdownRemark___children = 'eventGraphics___lobbyImage___childrenMarkdownRemark___children',
  eventGraphics___lobbyImage___childMarkdownRemark___id = 'eventGraphics___lobbyImage___childMarkdownRemark___id',
  eventGraphics___lobbyImage___childMarkdownRemark___excerpt = 'eventGraphics___lobbyImage___childMarkdownRemark___excerpt',
  eventGraphics___lobbyImage___childMarkdownRemark___rawMarkdownBody = 'eventGraphics___lobbyImage___childMarkdownRemark___rawMarkdownBody',
  eventGraphics___lobbyImage___childMarkdownRemark___fileAbsolutePath = 'eventGraphics___lobbyImage___childMarkdownRemark___fileAbsolutePath',
  eventGraphics___lobbyImage___childMarkdownRemark___html = 'eventGraphics___lobbyImage___childMarkdownRemark___html',
  eventGraphics___lobbyImage___childMarkdownRemark___htmlAst = 'eventGraphics___lobbyImage___childMarkdownRemark___htmlAst',
  eventGraphics___lobbyImage___childMarkdownRemark___excerptAst = 'eventGraphics___lobbyImage___childMarkdownRemark___excerptAst',
  eventGraphics___lobbyImage___childMarkdownRemark___headings = 'eventGraphics___lobbyImage___childMarkdownRemark___headings',
  eventGraphics___lobbyImage___childMarkdownRemark___timeToRead = 'eventGraphics___lobbyImage___childMarkdownRemark___timeToRead',
  eventGraphics___lobbyImage___childMarkdownRemark___tableOfContents = 'eventGraphics___lobbyImage___childMarkdownRemark___tableOfContents',
  eventGraphics___lobbyImage___childMarkdownRemark___children = 'eventGraphics___lobbyImage___childMarkdownRemark___children',
  eventGraphics___lobbyImage___id = 'eventGraphics___lobbyImage___id',
  eventGraphics___lobbyImage___parent___id = 'eventGraphics___lobbyImage___parent___id',
  eventGraphics___lobbyImage___parent___children = 'eventGraphics___lobbyImage___parent___children',
  eventGraphics___lobbyImage___children = 'eventGraphics___lobbyImage___children',
  eventGraphics___lobbyImage___children___id = 'eventGraphics___lobbyImage___children___id',
  eventGraphics___lobbyImage___children___children = 'eventGraphics___lobbyImage___children___children',
  eventGraphics___lobbyImage___internal___content = 'eventGraphics___lobbyImage___internal___content',
  eventGraphics___lobbyImage___internal___contentDigest = 'eventGraphics___lobbyImage___internal___contentDigest',
  eventGraphics___lobbyImage___internal___description = 'eventGraphics___lobbyImage___internal___description',
  eventGraphics___lobbyImage___internal___fieldOwners = 'eventGraphics___lobbyImage___internal___fieldOwners',
  eventGraphics___lobbyImage___internal___ignoreType = 'eventGraphics___lobbyImage___internal___ignoreType',
  eventGraphics___lobbyImage___internal___mediaType = 'eventGraphics___lobbyImage___internal___mediaType',
  eventGraphics___lobbyImage___internal___owner = 'eventGraphics___lobbyImage___internal___owner',
  eventGraphics___lobbyImage___internal___type = 'eventGraphics___lobbyImage___internal___type',
  pageGraphics___featuredImage___sourceInstanceName = 'pageGraphics___featuredImage___sourceInstanceName',
  pageGraphics___featuredImage___absolutePath = 'pageGraphics___featuredImage___absolutePath',
  pageGraphics___featuredImage___relativePath = 'pageGraphics___featuredImage___relativePath',
  pageGraphics___featuredImage___extension = 'pageGraphics___featuredImage___extension',
  pageGraphics___featuredImage___size = 'pageGraphics___featuredImage___size',
  pageGraphics___featuredImage___prettySize = 'pageGraphics___featuredImage___prettySize',
  pageGraphics___featuredImage___modifiedTime = 'pageGraphics___featuredImage___modifiedTime',
  pageGraphics___featuredImage___accessTime = 'pageGraphics___featuredImage___accessTime',
  pageGraphics___featuredImage___changeTime = 'pageGraphics___featuredImage___changeTime',
  pageGraphics___featuredImage___birthTime = 'pageGraphics___featuredImage___birthTime',
  pageGraphics___featuredImage___root = 'pageGraphics___featuredImage___root',
  pageGraphics___featuredImage___dir = 'pageGraphics___featuredImage___dir',
  pageGraphics___featuredImage___base = 'pageGraphics___featuredImage___base',
  pageGraphics___featuredImage___ext = 'pageGraphics___featuredImage___ext',
  pageGraphics___featuredImage___name = 'pageGraphics___featuredImage___name',
  pageGraphics___featuredImage___relativeDirectory = 'pageGraphics___featuredImage___relativeDirectory',
  pageGraphics___featuredImage___dev = 'pageGraphics___featuredImage___dev',
  pageGraphics___featuredImage___mode = 'pageGraphics___featuredImage___mode',
  pageGraphics___featuredImage___nlink = 'pageGraphics___featuredImage___nlink',
  pageGraphics___featuredImage___uid = 'pageGraphics___featuredImage___uid',
  pageGraphics___featuredImage___gid = 'pageGraphics___featuredImage___gid',
  pageGraphics___featuredImage___rdev = 'pageGraphics___featuredImage___rdev',
  pageGraphics___featuredImage___ino = 'pageGraphics___featuredImage___ino',
  pageGraphics___featuredImage___atimeMs = 'pageGraphics___featuredImage___atimeMs',
  pageGraphics___featuredImage___mtimeMs = 'pageGraphics___featuredImage___mtimeMs',
  pageGraphics___featuredImage___ctimeMs = 'pageGraphics___featuredImage___ctimeMs',
  pageGraphics___featuredImage___atime = 'pageGraphics___featuredImage___atime',
  pageGraphics___featuredImage___mtime = 'pageGraphics___featuredImage___mtime',
  pageGraphics___featuredImage___ctime = 'pageGraphics___featuredImage___ctime',
  pageGraphics___featuredImage___birthtime = 'pageGraphics___featuredImage___birthtime',
  pageGraphics___featuredImage___birthtimeMs = 'pageGraphics___featuredImage___birthtimeMs',
  pageGraphics___featuredImage___blksize = 'pageGraphics___featuredImage___blksize',
  pageGraphics___featuredImage___blocks = 'pageGraphics___featuredImage___blocks',
  pageGraphics___featuredImage___publicURL = 'pageGraphics___featuredImage___publicURL',
  pageGraphics___featuredImage___childrenImageSharp = 'pageGraphics___featuredImage___childrenImageSharp',
  pageGraphics___featuredImage___childrenImageSharp___gatsbyImageData = 'pageGraphics___featuredImage___childrenImageSharp___gatsbyImageData',
  pageGraphics___featuredImage___childrenImageSharp___id = 'pageGraphics___featuredImage___childrenImageSharp___id',
  pageGraphics___featuredImage___childrenImageSharp___children = 'pageGraphics___featuredImage___childrenImageSharp___children',
  pageGraphics___featuredImage___childImageSharp___gatsbyImageData = 'pageGraphics___featuredImage___childImageSharp___gatsbyImageData',
  pageGraphics___featuredImage___childImageSharp___id = 'pageGraphics___featuredImage___childImageSharp___id',
  pageGraphics___featuredImage___childImageSharp___children = 'pageGraphics___featuredImage___childImageSharp___children',
  pageGraphics___featuredImage___childrenMarkdownRemark = 'pageGraphics___featuredImage___childrenMarkdownRemark',
  pageGraphics___featuredImage___childrenMarkdownRemark___id = 'pageGraphics___featuredImage___childrenMarkdownRemark___id',
  pageGraphics___featuredImage___childrenMarkdownRemark___excerpt = 'pageGraphics___featuredImage___childrenMarkdownRemark___excerpt',
  pageGraphics___featuredImage___childrenMarkdownRemark___rawMarkdownBody = 'pageGraphics___featuredImage___childrenMarkdownRemark___rawMarkdownBody',
  pageGraphics___featuredImage___childrenMarkdownRemark___fileAbsolutePath = 'pageGraphics___featuredImage___childrenMarkdownRemark___fileAbsolutePath',
  pageGraphics___featuredImage___childrenMarkdownRemark___html = 'pageGraphics___featuredImage___childrenMarkdownRemark___html',
  pageGraphics___featuredImage___childrenMarkdownRemark___htmlAst = 'pageGraphics___featuredImage___childrenMarkdownRemark___htmlAst',
  pageGraphics___featuredImage___childrenMarkdownRemark___excerptAst = 'pageGraphics___featuredImage___childrenMarkdownRemark___excerptAst',
  pageGraphics___featuredImage___childrenMarkdownRemark___headings = 'pageGraphics___featuredImage___childrenMarkdownRemark___headings',
  pageGraphics___featuredImage___childrenMarkdownRemark___timeToRead = 'pageGraphics___featuredImage___childrenMarkdownRemark___timeToRead',
  pageGraphics___featuredImage___childrenMarkdownRemark___tableOfContents = 'pageGraphics___featuredImage___childrenMarkdownRemark___tableOfContents',
  pageGraphics___featuredImage___childrenMarkdownRemark___children = 'pageGraphics___featuredImage___childrenMarkdownRemark___children',
  pageGraphics___featuredImage___childMarkdownRemark___id = 'pageGraphics___featuredImage___childMarkdownRemark___id',
  pageGraphics___featuredImage___childMarkdownRemark___excerpt = 'pageGraphics___featuredImage___childMarkdownRemark___excerpt',
  pageGraphics___featuredImage___childMarkdownRemark___rawMarkdownBody = 'pageGraphics___featuredImage___childMarkdownRemark___rawMarkdownBody',
  pageGraphics___featuredImage___childMarkdownRemark___fileAbsolutePath = 'pageGraphics___featuredImage___childMarkdownRemark___fileAbsolutePath',
  pageGraphics___featuredImage___childMarkdownRemark___html = 'pageGraphics___featuredImage___childMarkdownRemark___html',
  pageGraphics___featuredImage___childMarkdownRemark___htmlAst = 'pageGraphics___featuredImage___childMarkdownRemark___htmlAst',
  pageGraphics___featuredImage___childMarkdownRemark___excerptAst = 'pageGraphics___featuredImage___childMarkdownRemark___excerptAst',
  pageGraphics___featuredImage___childMarkdownRemark___headings = 'pageGraphics___featuredImage___childMarkdownRemark___headings',
  pageGraphics___featuredImage___childMarkdownRemark___timeToRead = 'pageGraphics___featuredImage___childMarkdownRemark___timeToRead',
  pageGraphics___featuredImage___childMarkdownRemark___tableOfContents = 'pageGraphics___featuredImage___childMarkdownRemark___tableOfContents',
  pageGraphics___featuredImage___childMarkdownRemark___children = 'pageGraphics___featuredImage___childMarkdownRemark___children',
  pageGraphics___featuredImage___id = 'pageGraphics___featuredImage___id',
  pageGraphics___featuredImage___parent___id = 'pageGraphics___featuredImage___parent___id',
  pageGraphics___featuredImage___parent___children = 'pageGraphics___featuredImage___parent___children',
  pageGraphics___featuredImage___children = 'pageGraphics___featuredImage___children',
  pageGraphics___featuredImage___children___id = 'pageGraphics___featuredImage___children___id',
  pageGraphics___featuredImage___children___children = 'pageGraphics___featuredImage___children___children',
  pageGraphics___featuredImage___internal___content = 'pageGraphics___featuredImage___internal___content',
  pageGraphics___featuredImage___internal___contentDigest = 'pageGraphics___featuredImage___internal___contentDigest',
  pageGraphics___featuredImage___internal___description = 'pageGraphics___featuredImage___internal___description',
  pageGraphics___featuredImage___internal___fieldOwners = 'pageGraphics___featuredImage___internal___fieldOwners',
  pageGraphics___featuredImage___internal___ignoreType = 'pageGraphics___featuredImage___internal___ignoreType',
  pageGraphics___featuredImage___internal___mediaType = 'pageGraphics___featuredImage___internal___mediaType',
  pageGraphics___featuredImage___internal___owner = 'pageGraphics___featuredImage___internal___owner',
  pageGraphics___featuredImage___internal___type = 'pageGraphics___featuredImage___internal___type',
  title = 'title',
  analyticsCookies___enabled = 'analyticsCookies___enabled',
  analyticsCookies___title = 'analyticsCookies___title',
  analyticsCookies___content = 'analyticsCookies___content',
  templateKey = 'templateKey',
  description = 'description',
  siteUrl = 'siteUrl',
  colors___primaryColor = 'colors___primaryColor',
  colors___primaryColorHover = 'colors___primaryColorHover',
  colors___darkModeOnColor = 'colors___darkModeOnColor',
  colors___darkModeOffColor = 'colors___darkModeOffColor',
  socialLogin___facebook = 'socialLogin___facebook',
  socialLogin___google = 'socialLogin___google',
  socialLogin___twitter = 'socialLogin___twitter',
  socialLogin___github = 'socialLogin___github',
  slug = 'slug',
  pageBranding___primaryColor = 'pageBranding___primaryColor',
  pageBranding___primaryColorHover = 'pageBranding___primaryColorHover',
  cookieNotification___title = 'cookieNotification___title',
  cookieNotification___content = 'cookieNotification___content',
  necessaryCookies___title = 'necessaryCookies___title',
  necessaryCookies___content = 'necessaryCookies___content',
  eventInformation___startTime___datetime = 'eventInformation___startTime___datetime',
  eventInformation___startTime___timezone = 'eventInformation___startTime___timezone',
  eventInformation___endTime___datetime = 'eventInformation___endTime___datetime',
  eventInformation___endTime___timezone = 'eventInformation___endTime___timezone',
  eventInformation___livestreamUrl = 'eventInformation___livestreamUrl',
  eventBranding___primaryColor = 'eventBranding___primaryColor',
  eventBranding___primaryColorHover = 'eventBranding___primaryColorHover',
  eventSettings___allEvents = 'eventSettings___allEvents',
  eventSettings___mainStage = 'eventSettings___mainStage',
  eventSettings___mainStageFeature = 'eventSettings___mainStageFeature',
  eventSettings___chat = 'eventSettings___chat',
  eventSettings___schedule = 'eventSettings___schedule',
  eventSettings___rooms = 'eventSettings___rooms',
  eventSettings___qa = 'eventSettings___qa',
  eventSettings___map = 'eventSettings___map',
  eventSettings___pollsLabel = 'eventSettings___pollsLabel',
  eventSettings___qaLabel = 'eventSettings___qaLabel',
  eventSettings___mainStageLabel = 'eventSettings___mainStageLabel',
  eventSettings___polls = 'eventSettings___polls',
  eventSettings___mapLabel = 'eventSettings___mapLabel',
  eventSettings___allEventsLabel = 'eventSettings___allEventsLabel',
  eventSettings___chatLabel = 'eventSettings___chatLabel',
  eventSettings___roomsLabel = 'eventSettings___roomsLabel',
  eventSettings___scheduleLabel = 'eventSettings___scheduleLabel',
  eventSchedule = 'eventSchedule',
  eventSchedule___startTime___datetime = 'eventSchedule___startTime___datetime',
  eventSchedule___startTime___timezone = 'eventSchedule___startTime___timezone',
  eventSchedule___title = 'eventSchedule___title',
  eventSchedule___description = 'eventSchedule___description',
  eventQA = 'eventQA',
  eventQA___question = 'eventQA___question',
  eventQA___answer = 'eventQA___answer',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type MarkdownRemarkFrontmatterFilterInput = {
  graphics?: Maybe<MarkdownRemarkFrontmatterGraphicsFilterInput>;
  eventRooms?: Maybe<MarkdownRemarkFrontmatterEventRoomFilterListInput>;
  eventGraphics?: Maybe<MarkdownRemarkFrontmatterEventGraphicsFilterInput>;
  pageGraphics?: Maybe<MarkdownRemarkFrontmatterPageGraphicsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  analyticsCookies?: Maybe<MarkdownRemarkFrontmatterAnalyticsCookiesFilterInput>;
  templateKey?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<MarkdownRemarkFrontmatterColorsFilterInput>;
  socialLogin?: Maybe<MarkdownRemarkFrontmatterSocialLoginFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  pageBranding?: Maybe<MarkdownRemarkFrontmatterPageBrandingFilterInput>;
  cookieNotification?: Maybe<MarkdownRemarkFrontmatterCookieNotificationFilterInput>;
  necessaryCookies?: Maybe<MarkdownRemarkFrontmatterNecessaryCookiesFilterInput>;
  eventInformation?: Maybe<MarkdownRemarkFrontmatterEventInformationFilterInput>;
  eventBranding?: Maybe<MarkdownRemarkFrontmatterEventBrandingFilterInput>;
  eventSettings?: Maybe<MarkdownRemarkFrontmatterEventSettingsFilterInput>;
  eventSchedule?: Maybe<MarkdownRemarkFrontmatterEventScheduleFilterListInput>;
  eventQA?: Maybe<MarkdownRemarkFrontmatterEventQaFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatterGraphics = {
  __typename?: 'MarkdownRemarkFrontmatterGraphics';
  logo?: Maybe<File>;
  favicon?: Maybe<File>;
};

export type MarkdownRemarkFrontmatterGraphicsFilterInput = {
  logo?: Maybe<FileFilterInput>;
  favicon?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkFrontmatterGroupConnection = {
  __typename?: 'MarkdownRemarkFrontmatterGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkFrontmatterEdge>;
  nodes: Array<MarkdownRemarkFrontmatter>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterNecessaryCookies = {
  __typename?: 'MarkdownRemarkFrontmatterNecessaryCookies';
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterNecessaryCookiesFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  content?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterPageBranding = {
  __typename?: 'MarkdownRemarkFrontmatterPageBranding';
  primaryColor?: Maybe<Scalars['String']>;
  primaryColorHover?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterPageBrandingFilterInput = {
  primaryColor?: Maybe<StringQueryOperatorInput>;
  primaryColorHover?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterPageGraphics = {
  __typename?: 'MarkdownRemarkFrontmatterPageGraphics';
  featuredImage?: Maybe<File>;
};

export type MarkdownRemarkFrontmatterPageGraphicsFilterInput = {
  featuredImage?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkFrontmatterSocialLogin = {
  __typename?: 'MarkdownRemarkFrontmatterSocialLogin';
  facebook?: Maybe<Scalars['Boolean']>;
  google?: Maybe<Scalars['Boolean']>;
  twitter?: Maybe<Scalars['Boolean']>;
  github?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkFrontmatterSocialLoginFilterInput = {
  facebook?: Maybe<BooleanQueryOperatorInput>;
  google?: Maybe<BooleanQueryOperatorInput>;
  twitter?: Maybe<BooleanQueryOperatorInput>;
  github?: Maybe<BooleanQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownRemarkGroupConnection = {
  __typename?: 'MarkdownRemarkGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<MarkdownRemarkEdge>;
  nodes: Array<MarkdownRemark>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
  __typename?: 'MarkdownWordCount';
  paragraphs?: Maybe<Scalars['Int']>;
  sentences?: Maybe<Scalars['Int']>;
  words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>;
  sentences?: Maybe<IntQueryOperatorInput>;
  words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>;
};

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>;
  compressionSpeed?: Maybe<Scalars['Int']>;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>;
  turdSize?: Maybe<Scalars['Float']>;
  alphaMax?: Maybe<Scalars['Float']>;
  optCurve?: Maybe<Scalars['Boolean']>;
  optTolerance?: Maybe<Scalars['Float']>;
  threshold?: Maybe<Scalars['Int']>;
  blackOnWhite?: Maybe<Scalars['Boolean']>;
  color?: Maybe<Scalars['String']>;
  background?: Maybe<Scalars['String']>;
};

export enum PotraceTurnPolicy {
  TURNPOLICY_BLACK = 'TURNPOLICY_BLACK',
  TURNPOLICY_WHITE = 'TURNPOLICY_WHITE',
  TURNPOLICY_LEFT = 'TURNPOLICY_LEFT',
  TURNPOLICY_RIGHT = 'TURNPOLICY_RIGHT',
  TURNPOLICY_MINORITY = 'TURNPOLICY_MINORITY',
  TURNPOLICY_MAJORITY = 'TURNPOLICY_MAJORITY'
}

export type Query = {
  __typename?: 'Query';
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  markdownRemark?: Maybe<MarkdownRemark>;
  allMarkdownRemark: MarkdownRemarkConnection;
  markdownRemarkFrontmatter?: Maybe<MarkdownRemarkFrontmatter>;
  allMarkdownRemarkFrontmatter: MarkdownRemarkFrontmatterConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  eventByLocale?: Maybe<MarkdownRemark>;
  eventsByLocale?: Maybe<Array<Maybe<MarkdownRemark>>>;
  pageByLocale?: Maybe<MarkdownRemark>;
  configByLocale?: Maybe<MarkdownRemark>;
  cookiesByLocale?: Maybe<MarkdownRemark>;
};


export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  publicURL?: Maybe<StringQueryOperatorInput>;
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>;
  childImageSharp?: Maybe<ImageSharpFilterInput>;
  childrenMarkdownRemark?: Maybe<MarkdownRemarkFilterListInput>;
  childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>;
  sort?: Maybe<FileSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>;
  absolutePath?: Maybe<StringQueryOperatorInput>;
  relativePath?: Maybe<StringQueryOperatorInput>;
  extension?: Maybe<StringQueryOperatorInput>;
  size?: Maybe<IntQueryOperatorInput>;
  prettySize?: Maybe<StringQueryOperatorInput>;
  modifiedTime?: Maybe<DateQueryOperatorInput>;
  accessTime?: Maybe<DateQueryOperatorInput>;
  changeTime?: Maybe<DateQueryOperatorInput>;
  birthTime?: Maybe<DateQueryOperatorInput>;
  root?: Maybe<StringQueryOperatorInput>;
  dir?: Maybe<StringQueryOperatorInput>;
  base?: Maybe<StringQueryOperatorInput>;
  ext?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  relativeDirectory?: Maybe<StringQueryOperatorInput>;
  dev?: Maybe<IntQueryOperatorInput>;
  mode?: Maybe<IntQueryOperatorInput>;
  nlink?: Maybe<IntQueryOperatorInput>;
  uid?: Maybe<IntQueryOperatorInput>;
  gid?: Maybe<IntQueryOperatorInput>;
  rdev?: Maybe<IntQueryOperatorInput>;
  ino?: Maybe<FloatQueryOperatorInput>;
  atimeMs?: Maybe<FloatQueryOperatorInput>;
  mtimeMs?: Maybe<FloatQueryOperatorInput>;
  ctimeMs?: Maybe<FloatQueryOperatorInput>;
  atime?: Maybe<DateQueryOperatorInput>;
  mtime?: Maybe<DateQueryOperatorInput>;
  ctime?: Maybe<DateQueryOperatorInput>;
  birthtime?: Maybe<DateQueryOperatorInput>;
  birthtimeMs?: Maybe<FloatQueryOperatorInput>;
  blksize?: Maybe<IntQueryOperatorInput>;
  blocks?: Maybe<IntQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>;
  sort?: Maybe<DirectorySortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>;
  sort?: Maybe<SiteSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>;
  sort?: Maybe<SiteFunctionSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};


export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>;
  sort?: Maybe<SitePageSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>;
  fluid?: Maybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>;
  original?: Maybe<ImageSharpOriginalFilterInput>;
  resize?: Maybe<ImageSharpResizeFilterInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>;
  sort?: Maybe<ImageSharpSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  excerpt?: Maybe<StringQueryOperatorInput>;
  rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
  fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
  html?: Maybe<StringQueryOperatorInput>;
  htmlAst?: Maybe<JsonQueryOperatorInput>;
  excerptAst?: Maybe<JsonQueryOperatorInput>;
  headings?: Maybe<MarkdownHeadingFilterListInput>;
  timeToRead?: Maybe<IntQueryOperatorInput>;
  tableOfContents?: Maybe<StringQueryOperatorInput>;
  wordCount?: Maybe<MarkdownWordCountFilterInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>;
  sort?: Maybe<MarkdownRemarkSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryMarkdownRemarkFrontmatterArgs = {
  graphics?: Maybe<MarkdownRemarkFrontmatterGraphicsFilterInput>;
  eventRooms?: Maybe<MarkdownRemarkFrontmatterEventRoomFilterListInput>;
  eventGraphics?: Maybe<MarkdownRemarkFrontmatterEventGraphicsFilterInput>;
  pageGraphics?: Maybe<MarkdownRemarkFrontmatterPageGraphicsFilterInput>;
  title?: Maybe<StringQueryOperatorInput>;
  analyticsCookies?: Maybe<MarkdownRemarkFrontmatterAnalyticsCookiesFilterInput>;
  templateKey?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  siteUrl?: Maybe<StringQueryOperatorInput>;
  colors?: Maybe<MarkdownRemarkFrontmatterColorsFilterInput>;
  socialLogin?: Maybe<MarkdownRemarkFrontmatterSocialLoginFilterInput>;
  slug?: Maybe<StringQueryOperatorInput>;
  pageBranding?: Maybe<MarkdownRemarkFrontmatterPageBrandingFilterInput>;
  cookieNotification?: Maybe<MarkdownRemarkFrontmatterCookieNotificationFilterInput>;
  necessaryCookies?: Maybe<MarkdownRemarkFrontmatterNecessaryCookiesFilterInput>;
  eventInformation?: Maybe<MarkdownRemarkFrontmatterEventInformationFilterInput>;
  eventBranding?: Maybe<MarkdownRemarkFrontmatterEventBrandingFilterInput>;
  eventSettings?: Maybe<MarkdownRemarkFrontmatterEventSettingsFilterInput>;
  eventSchedule?: Maybe<MarkdownRemarkFrontmatterEventScheduleFilterListInput>;
  eventQA?: Maybe<MarkdownRemarkFrontmatterEventQaFilterListInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};


export type QueryAllMarkdownRemarkFrontmatterArgs = {
  filter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
  sort?: Maybe<MarkdownRemarkFrontmatterSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};


export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>;
  sort?: Maybe<SitePluginSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};


export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>;
  sort?: Maybe<SiteBuildMetadataSortInput>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
};


export type QueryEventByLocaleArgs = {
  locale: Scalars['String'];
  slug: Scalars['String'];
};


export type QueryEventsByLocaleArgs = {
  locale: Scalars['String'];
  limit: Scalars['Int'];
  skip: Scalars['Int'];
};


export type QueryPageByLocaleArgs = {
  locale: Scalars['String'];
  slug: Scalars['String'];
};


export type QueryConfigByLocaleArgs = {
  locale: Scalars['String'];
};


export type QueryCookiesByLocaleArgs = {
  locale: Scalars['String'];
};

export type Site = Node & {
  __typename?: 'Site';
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  flags?: Maybe<SiteFlags>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};


export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
  __typename?: 'SiteBuildMetadata';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  buildTime?: Maybe<Scalars['Date']>;
};


export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>;
  fromNow?: Maybe<Scalars['Boolean']>;
  difference?: Maybe<Scalars['String']>;
  locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
  __typename?: 'SiteBuildMetadataConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};


export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum;
};


export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
  __typename?: 'SiteBuildMetadataEdge';
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export enum SiteBuildMetadataFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  buildTime = 'buildTime'
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
  __typename?: 'SiteBuildMetadataGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
  __typename?: 'SiteConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};


export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum;
};


export type SiteConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFieldsEnum;
};

export type SiteEdge = {
  __typename?: 'SiteEdge';
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export enum SiteFieldsEnum {
  buildTime = 'buildTime',
  siteMetadata___title = 'siteMetadata___title',
  siteMetadata___description = 'siteMetadata___description',
  port = 'port',
  host = 'host',
  flags___PRESERVE_FILE_DOWNLOAD_CACHE = 'flags___PRESERVE_FILE_DOWNLOAD_CACHE',
  flags___DEV_SSR = 'flags___DEV_SSR',
  flags___FAST_DEV = 'flags___FAST_DEV',
  flags___PARALLEL_SOURCING = 'flags___PARALLEL_SOURCING',
  polyfill = 'polyfill',
  pathPrefix = 'pathPrefix',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>;
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
  port?: Maybe<IntQueryOperatorInput>;
  host?: Maybe<StringQueryOperatorInput>;
  flags?: Maybe<SiteFlagsFilterInput>;
  polyfill?: Maybe<BooleanQueryOperatorInput>;
  pathPrefix?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFlags = {
  __typename?: 'SiteFlags';
  PRESERVE_FILE_DOWNLOAD_CACHE?: Maybe<Scalars['Boolean']>;
  DEV_SSR?: Maybe<Scalars['Boolean']>;
  FAST_DEV?: Maybe<Scalars['Boolean']>;
  PARALLEL_SOURCING?: Maybe<Scalars['Boolean']>;
};

export type SiteFlagsFilterInput = {
  PRESERVE_FILE_DOWNLOAD_CACHE?: Maybe<BooleanQueryOperatorInput>;
  DEV_SSR?: Maybe<BooleanQueryOperatorInput>;
  FAST_DEV?: Maybe<BooleanQueryOperatorInput>;
  PARALLEL_SOURCING?: Maybe<BooleanQueryOperatorInput>;
};

export type SiteFunction = Node & {
  __typename?: 'SiteFunction';
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteFunctionConnection = {
  __typename?: 'SiteFunctionConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};


export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum;
};


export type SiteFunctionConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SiteFunctionFieldsEnum;
};

export type SiteFunctionEdge = {
  __typename?: 'SiteFunctionEdge';
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export enum SiteFunctionFieldsEnum {
  functionRoute = 'functionRoute',
  pluginName = 'pluginName',
  originalAbsoluteFilePath = 'originalAbsoluteFilePath',
  originalRelativeFilePath = 'originalRelativeFilePath',
  relativeCompiledFilePath = 'relativeCompiledFilePath',
  absoluteCompiledFilePath = 'absoluteCompiledFilePath',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type'
}

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>;
  pluginName?: Maybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
};

export type SiteFunctionGroupConnection = {
  __typename?: 'SiteFunctionGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteGroupConnection = {
  __typename?: 'SiteGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
  __typename?: 'SitePage';
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  context?: Maybe<SitePageContext>;
  pluginCreator?: Maybe<SitePlugin>;
  pluginCreatorId?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
  __typename?: 'SitePageConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};


export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum;
};


export type SitePageConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePageFieldsEnum;
};

export type SitePageContext = {
  __typename?: 'SitePageContext';
  currentPage?: Maybe<Scalars['Int']>;
  numPages?: Maybe<Scalars['Int']>;
  hasNextPage?: Maybe<Scalars['Boolean']>;
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  locale?: Maybe<Scalars['String']>;
  defaultLocale?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
  currentPage?: Maybe<IntQueryOperatorInput>;
  numPages?: Maybe<IntQueryOperatorInput>;
  hasNextPage?: Maybe<BooleanQueryOperatorInput>;
  skip?: Maybe<IntQueryOperatorInput>;
  limit?: Maybe<IntQueryOperatorInput>;
  locale?: Maybe<StringQueryOperatorInput>;
  defaultLocale?: Maybe<StringQueryOperatorInput>;
  slug?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
  __typename?: 'SitePageEdge';
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export enum SitePageFieldsEnum {
  path = 'path',
  component = 'component',
  internalComponentName = 'internalComponentName',
  componentChunkName = 'componentChunkName',
  matchPath = 'matchPath',
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  isCreatedByStatefulCreatePages = 'isCreatedByStatefulCreatePages',
  context___currentPage = 'context___currentPage',
  context___numPages = 'context___numPages',
  context___hasNextPage = 'context___hasNextPage',
  context___skip = 'context___skip',
  context___limit = 'context___limit',
  context___locale = 'context___locale',
  context___defaultLocale = 'context___defaultLocale',
  context___slug = 'context___slug',
  pluginCreator___id = 'pluginCreator___id',
  pluginCreator___parent___id = 'pluginCreator___parent___id',
  pluginCreator___parent___parent___id = 'pluginCreator___parent___parent___id',
  pluginCreator___parent___parent___children = 'pluginCreator___parent___parent___children',
  pluginCreator___parent___children = 'pluginCreator___parent___children',
  pluginCreator___parent___children___id = 'pluginCreator___parent___children___id',
  pluginCreator___parent___children___children = 'pluginCreator___parent___children___children',
  pluginCreator___parent___internal___content = 'pluginCreator___parent___internal___content',
  pluginCreator___parent___internal___contentDigest = 'pluginCreator___parent___internal___contentDigest',
  pluginCreator___parent___internal___description = 'pluginCreator___parent___internal___description',
  pluginCreator___parent___internal___fieldOwners = 'pluginCreator___parent___internal___fieldOwners',
  pluginCreator___parent___internal___ignoreType = 'pluginCreator___parent___internal___ignoreType',
  pluginCreator___parent___internal___mediaType = 'pluginCreator___parent___internal___mediaType',
  pluginCreator___parent___internal___owner = 'pluginCreator___parent___internal___owner',
  pluginCreator___parent___internal___type = 'pluginCreator___parent___internal___type',
  pluginCreator___children = 'pluginCreator___children',
  pluginCreator___children___id = 'pluginCreator___children___id',
  pluginCreator___children___parent___id = 'pluginCreator___children___parent___id',
  pluginCreator___children___parent___children = 'pluginCreator___children___parent___children',
  pluginCreator___children___children = 'pluginCreator___children___children',
  pluginCreator___children___children___id = 'pluginCreator___children___children___id',
  pluginCreator___children___children___children = 'pluginCreator___children___children___children',
  pluginCreator___children___internal___content = 'pluginCreator___children___internal___content',
  pluginCreator___children___internal___contentDigest = 'pluginCreator___children___internal___contentDigest',
  pluginCreator___children___internal___description = 'pluginCreator___children___internal___description',
  pluginCreator___children___internal___fieldOwners = 'pluginCreator___children___internal___fieldOwners',
  pluginCreator___children___internal___ignoreType = 'pluginCreator___children___internal___ignoreType',
  pluginCreator___children___internal___mediaType = 'pluginCreator___children___internal___mediaType',
  pluginCreator___children___internal___owner = 'pluginCreator___children___internal___owner',
  pluginCreator___children___internal___type = 'pluginCreator___children___internal___type',
  pluginCreator___internal___content = 'pluginCreator___internal___content',
  pluginCreator___internal___contentDigest = 'pluginCreator___internal___contentDigest',
  pluginCreator___internal___description = 'pluginCreator___internal___description',
  pluginCreator___internal___fieldOwners = 'pluginCreator___internal___fieldOwners',
  pluginCreator___internal___ignoreType = 'pluginCreator___internal___ignoreType',
  pluginCreator___internal___mediaType = 'pluginCreator___internal___mediaType',
  pluginCreator___internal___owner = 'pluginCreator___internal___owner',
  pluginCreator___internal___type = 'pluginCreator___internal___type',
  pluginCreator___resolve = 'pluginCreator___resolve',
  pluginCreator___name = 'pluginCreator___name',
  pluginCreator___version = 'pluginCreator___version',
  pluginCreator___pluginOptions___plugins = 'pluginCreator___pluginOptions___plugins',
  pluginCreator___pluginOptions___plugins___resolve = 'pluginCreator___pluginOptions___plugins___resolve',
  pluginCreator___pluginOptions___plugins___id = 'pluginCreator___pluginOptions___plugins___id',
  pluginCreator___pluginOptions___plugins___name = 'pluginCreator___pluginOptions___plugins___name',
  pluginCreator___pluginOptions___plugins___version = 'pluginCreator___pluginOptions___plugins___version',
  pluginCreator___pluginOptions___plugins___nodeAPIs = 'pluginCreator___pluginOptions___plugins___nodeAPIs',
  pluginCreator___pluginOptions___plugins___browserAPIs = 'pluginCreator___pluginOptions___plugins___browserAPIs',
  pluginCreator___pluginOptions___plugins___pluginFilepath = 'pluginCreator___pluginOptions___plugins___pluginFilepath',
  pluginCreator___pluginOptions___modulePath = 'pluginCreator___pluginOptions___modulePath',
  pluginCreator___pluginOptions___manualInit = 'pluginCreator___pluginOptions___manualInit',
  pluginCreator___pluginOptions___sourceMap = 'pluginCreator___pluginOptions___sourceMap',
  pluginCreator___pluginOptions___autoLabel = 'pluginCreator___pluginOptions___autoLabel',
  pluginCreator___pluginOptions___labelFormat = 'pluginCreator___pluginOptions___labelFormat',
  pluginCreator___pluginOptions___cssPropOptimization = 'pluginCreator___pluginOptions___cssPropOptimization',
  pluginCreator___pluginOptions___pathToConfigModule = 'pluginCreator___pluginOptions___pathToConfigModule',
  pluginCreator___pluginOptions___omitGoogleFont = 'pluginCreator___pluginOptions___omitGoogleFont',
  pluginCreator___pluginOptions___devMode = 'pluginCreator___pluginOptions___devMode',
  pluginCreator___pluginOptions___googleAnalytics___trackingId = 'pluginCreator___pluginOptions___googleAnalytics___trackingId',
  pluginCreator___pluginOptions___googleAnalytics___cookieName = 'pluginCreator___pluginOptions___googleAnalytics___cookieName',
  pluginCreator___pluginOptions___googleAnalytics___anonymize = 'pluginCreator___pluginOptions___googleAnalytics___anonymize',
  pluginCreator___pluginOptions___googleAnalytics___allowAdFeatures = 'pluginCreator___pluginOptions___googleAnalytics___allowAdFeatures',
  pluginCreator___pluginOptions___googleTagManager___cookieName = 'pluginCreator___pluginOptions___googleTagManager___cookieName',
  pluginCreator___pluginOptions___googleTagManager___dataLayerName = 'pluginCreator___pluginOptions___googleTagManager___dataLayerName',
  pluginCreator___pluginOptions___facebookPixel___cookieName = 'pluginCreator___pluginOptions___facebookPixel___cookieName',
  pluginCreator___pluginOptions___environments = 'pluginCreator___pluginOptions___environments',
  pluginCreator___pluginOptions___color = 'pluginCreator___pluginOptions___color',
  pluginCreator___pluginOptions___showSpinner = 'pluginCreator___pluginOptions___showSpinner',
  pluginCreator___pluginOptions___name = 'pluginCreator___pluginOptions___name',
  pluginCreator___pluginOptions___path = 'pluginCreator___pluginOptions___path',
  pluginCreator___pluginOptions___base64Width = 'pluginCreator___pluginOptions___base64Width',
  pluginCreator___pluginOptions___stripMetadata = 'pluginCreator___pluginOptions___stripMetadata',
  pluginCreator___pluginOptions___defaultQuality = 'pluginCreator___pluginOptions___defaultQuality',
  pluginCreator___pluginOptions___failOnError = 'pluginCreator___pluginOptions___failOnError',
  pluginCreator___pluginOptions___target = 'pluginCreator___pluginOptions___target',
  pluginCreator___pluginOptions___rel = 'pluginCreator___pluginOptions___rel',
  pluginCreator___pluginOptions___maxWidth = 'pluginCreator___pluginOptions___maxWidth',
  pluginCreator___pluginOptions___linkImagesToOriginal = 'pluginCreator___pluginOptions___linkImagesToOriginal',
  pluginCreator___pluginOptions___showCaptions = 'pluginCreator___pluginOptions___showCaptions',
  pluginCreator___pluginOptions___markdownCaptions = 'pluginCreator___pluginOptions___markdownCaptions',
  pluginCreator___pluginOptions___sizeByPixelDensity = 'pluginCreator___pluginOptions___sizeByPixelDensity',
  pluginCreator___pluginOptions___backgroundColor = 'pluginCreator___pluginOptions___backgroundColor',
  pluginCreator___pluginOptions___quality = 'pluginCreator___pluginOptions___quality',
  pluginCreator___pluginOptions___withWebp = 'pluginCreator___pluginOptions___withWebp',
  pluginCreator___pluginOptions___tracedSVG = 'pluginCreator___pluginOptions___tracedSVG',
  pluginCreator___pluginOptions___loading = 'pluginCreator___pluginOptions___loading',
  pluginCreator___pluginOptions___decoding = 'pluginCreator___pluginOptions___decoding',
  pluginCreator___pluginOptions___disableBgImageOnAlpha = 'pluginCreator___pluginOptions___disableBgImageOnAlpha',
  pluginCreator___pluginOptions___disableBgImage = 'pluginCreator___pluginOptions___disableBgImage',
  pluginCreator___pluginOptions___linkStyles = 'pluginCreator___pluginOptions___linkStyles',
  pluginCreator___pluginOptions___pathCheck = 'pluginCreator___pluginOptions___pathCheck',
  pluginCreator___pluginOptions___allExtensions = 'pluginCreator___pluginOptions___allExtensions',
  pluginCreator___pluginOptions___isTSX = 'pluginCreator___pluginOptions___isTSX',
  pluginCreator___pluginOptions___jsxPragma = 'pluginCreator___pluginOptions___jsxPragma',
  pluginCreator___nodeAPIs = 'pluginCreator___nodeAPIs',
  pluginCreator___browserAPIs = 'pluginCreator___browserAPIs',
  pluginCreator___ssrAPIs = 'pluginCreator___ssrAPIs',
  pluginCreator___pluginFilepath = 'pluginCreator___pluginFilepath',
  pluginCreator___packageJson___name = 'pluginCreator___packageJson___name',
  pluginCreator___packageJson___description = 'pluginCreator___packageJson___description',
  pluginCreator___packageJson___version = 'pluginCreator___packageJson___version',
  pluginCreator___packageJson___main = 'pluginCreator___packageJson___main',
  pluginCreator___packageJson___license = 'pluginCreator___packageJson___license',
  pluginCreator___packageJson___dependencies = 'pluginCreator___packageJson___dependencies',
  pluginCreator___packageJson___dependencies___name = 'pluginCreator___packageJson___dependencies___name',
  pluginCreator___packageJson___dependencies___version = 'pluginCreator___packageJson___dependencies___version',
  pluginCreator___packageJson___devDependencies = 'pluginCreator___packageJson___devDependencies',
  pluginCreator___packageJson___devDependencies___name = 'pluginCreator___packageJson___devDependencies___name',
  pluginCreator___packageJson___devDependencies___version = 'pluginCreator___packageJson___devDependencies___version',
  pluginCreator___packageJson___peerDependencies = 'pluginCreator___packageJson___peerDependencies',
  pluginCreator___packageJson___peerDependencies___name = 'pluginCreator___packageJson___peerDependencies___name',
  pluginCreator___packageJson___peerDependencies___version = 'pluginCreator___packageJson___peerDependencies___version',
  pluginCreator___packageJson___keywords = 'pluginCreator___packageJson___keywords',
  pluginCreatorId = 'pluginCreatorId'
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>;
  component?: Maybe<StringQueryOperatorInput>;
  internalComponentName?: Maybe<StringQueryOperatorInput>;
  componentChunkName?: Maybe<StringQueryOperatorInput>;
  matchPath?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
  context?: Maybe<SitePageContextFilterInput>;
  pluginCreator?: Maybe<SitePluginFilterInput>;
  pluginCreatorId?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
  __typename?: 'SitePageGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
  __typename?: 'SitePlugin';
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
  __typename?: 'SitePluginConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};


export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum;
};


export type SitePluginConnectionGroupArgs = {
  skip?: Maybe<Scalars['Int']>;
  limit?: Maybe<Scalars['Int']>;
  field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
  __typename?: 'SitePluginEdge';
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export enum SitePluginFieldsEnum {
  id = 'id',
  parent___id = 'parent___id',
  parent___parent___id = 'parent___parent___id',
  parent___parent___parent___id = 'parent___parent___parent___id',
  parent___parent___parent___children = 'parent___parent___parent___children',
  parent___parent___children = 'parent___parent___children',
  parent___parent___children___id = 'parent___parent___children___id',
  parent___parent___children___children = 'parent___parent___children___children',
  parent___parent___internal___content = 'parent___parent___internal___content',
  parent___parent___internal___contentDigest = 'parent___parent___internal___contentDigest',
  parent___parent___internal___description = 'parent___parent___internal___description',
  parent___parent___internal___fieldOwners = 'parent___parent___internal___fieldOwners',
  parent___parent___internal___ignoreType = 'parent___parent___internal___ignoreType',
  parent___parent___internal___mediaType = 'parent___parent___internal___mediaType',
  parent___parent___internal___owner = 'parent___parent___internal___owner',
  parent___parent___internal___type = 'parent___parent___internal___type',
  parent___children = 'parent___children',
  parent___children___id = 'parent___children___id',
  parent___children___parent___id = 'parent___children___parent___id',
  parent___children___parent___children = 'parent___children___parent___children',
  parent___children___children = 'parent___children___children',
  parent___children___children___id = 'parent___children___children___id',
  parent___children___children___children = 'parent___children___children___children',
  parent___children___internal___content = 'parent___children___internal___content',
  parent___children___internal___contentDigest = 'parent___children___internal___contentDigest',
  parent___children___internal___description = 'parent___children___internal___description',
  parent___children___internal___fieldOwners = 'parent___children___internal___fieldOwners',
  parent___children___internal___ignoreType = 'parent___children___internal___ignoreType',
  parent___children___internal___mediaType = 'parent___children___internal___mediaType',
  parent___children___internal___owner = 'parent___children___internal___owner',
  parent___children___internal___type = 'parent___children___internal___type',
  parent___internal___content = 'parent___internal___content',
  parent___internal___contentDigest = 'parent___internal___contentDigest',
  parent___internal___description = 'parent___internal___description',
  parent___internal___fieldOwners = 'parent___internal___fieldOwners',
  parent___internal___ignoreType = 'parent___internal___ignoreType',
  parent___internal___mediaType = 'parent___internal___mediaType',
  parent___internal___owner = 'parent___internal___owner',
  parent___internal___type = 'parent___internal___type',
  children = 'children',
  children___id = 'children___id',
  children___parent___id = 'children___parent___id',
  children___parent___parent___id = 'children___parent___parent___id',
  children___parent___parent___children = 'children___parent___parent___children',
  children___parent___children = 'children___parent___children',
  children___parent___children___id = 'children___parent___children___id',
  children___parent___children___children = 'children___parent___children___children',
  children___parent___internal___content = 'children___parent___internal___content',
  children___parent___internal___contentDigest = 'children___parent___internal___contentDigest',
  children___parent___internal___description = 'children___parent___internal___description',
  children___parent___internal___fieldOwners = 'children___parent___internal___fieldOwners',
  children___parent___internal___ignoreType = 'children___parent___internal___ignoreType',
  children___parent___internal___mediaType = 'children___parent___internal___mediaType',
  children___parent___internal___owner = 'children___parent___internal___owner',
  children___parent___internal___type = 'children___parent___internal___type',
  children___children = 'children___children',
  children___children___id = 'children___children___id',
  children___children___parent___id = 'children___children___parent___id',
  children___children___parent___children = 'children___children___parent___children',
  children___children___children = 'children___children___children',
  children___children___children___id = 'children___children___children___id',
  children___children___children___children = 'children___children___children___children',
  children___children___internal___content = 'children___children___internal___content',
  children___children___internal___contentDigest = 'children___children___internal___contentDigest',
  children___children___internal___description = 'children___children___internal___description',
  children___children___internal___fieldOwners = 'children___children___internal___fieldOwners',
  children___children___internal___ignoreType = 'children___children___internal___ignoreType',
  children___children___internal___mediaType = 'children___children___internal___mediaType',
  children___children___internal___owner = 'children___children___internal___owner',
  children___children___internal___type = 'children___children___internal___type',
  children___internal___content = 'children___internal___content',
  children___internal___contentDigest = 'children___internal___contentDigest',
  children___internal___description = 'children___internal___description',
  children___internal___fieldOwners = 'children___internal___fieldOwners',
  children___internal___ignoreType = 'children___internal___ignoreType',
  children___internal___mediaType = 'children___internal___mediaType',
  children___internal___owner = 'children___internal___owner',
  children___internal___type = 'children___internal___type',
  internal___content = 'internal___content',
  internal___contentDigest = 'internal___contentDigest',
  internal___description = 'internal___description',
  internal___fieldOwners = 'internal___fieldOwners',
  internal___ignoreType = 'internal___ignoreType',
  internal___mediaType = 'internal___mediaType',
  internal___owner = 'internal___owner',
  internal___type = 'internal___type',
  resolve = 'resolve',
  name = 'name',
  version = 'version',
  pluginOptions___plugins = 'pluginOptions___plugins',
  pluginOptions___plugins___resolve = 'pluginOptions___plugins___resolve',
  pluginOptions___plugins___id = 'pluginOptions___plugins___id',
  pluginOptions___plugins___name = 'pluginOptions___plugins___name',
  pluginOptions___plugins___version = 'pluginOptions___plugins___version',
  pluginOptions___plugins___pluginOptions___target = 'pluginOptions___plugins___pluginOptions___target',
  pluginOptions___plugins___pluginOptions___rel = 'pluginOptions___plugins___pluginOptions___rel',
  pluginOptions___plugins___pluginOptions___maxWidth = 'pluginOptions___plugins___pluginOptions___maxWidth',
  pluginOptions___plugins___pluginOptions___linkImagesToOriginal = 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal',
  pluginOptions___plugins___pluginOptions___showCaptions = 'pluginOptions___plugins___pluginOptions___showCaptions',
  pluginOptions___plugins___pluginOptions___markdownCaptions = 'pluginOptions___plugins___pluginOptions___markdownCaptions',
  pluginOptions___plugins___pluginOptions___sizeByPixelDensity = 'pluginOptions___plugins___pluginOptions___sizeByPixelDensity',
  pluginOptions___plugins___pluginOptions___backgroundColor = 'pluginOptions___plugins___pluginOptions___backgroundColor',
  pluginOptions___plugins___pluginOptions___quality = 'pluginOptions___plugins___pluginOptions___quality',
  pluginOptions___plugins___pluginOptions___withWebp = 'pluginOptions___plugins___pluginOptions___withWebp',
  pluginOptions___plugins___pluginOptions___tracedSVG = 'pluginOptions___plugins___pluginOptions___tracedSVG',
  pluginOptions___plugins___pluginOptions___loading = 'pluginOptions___plugins___pluginOptions___loading',
  pluginOptions___plugins___pluginOptions___decoding = 'pluginOptions___plugins___pluginOptions___decoding',
  pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha = 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha',
  pluginOptions___plugins___pluginOptions___disableBgImage = 'pluginOptions___plugins___pluginOptions___disableBgImage',
  pluginOptions___plugins___nodeAPIs = 'pluginOptions___plugins___nodeAPIs',
  pluginOptions___plugins___browserAPIs = 'pluginOptions___plugins___browserAPIs',
  pluginOptions___plugins___pluginFilepath = 'pluginOptions___plugins___pluginFilepath',
  pluginOptions___modulePath = 'pluginOptions___modulePath',
  pluginOptions___manualInit = 'pluginOptions___manualInit',
  pluginOptions___sourceMap = 'pluginOptions___sourceMap',
  pluginOptions___autoLabel = 'pluginOptions___autoLabel',
  pluginOptions___labelFormat = 'pluginOptions___labelFormat',
  pluginOptions___cssPropOptimization = 'pluginOptions___cssPropOptimization',
  pluginOptions___pathToConfigModule = 'pluginOptions___pathToConfigModule',
  pluginOptions___omitGoogleFont = 'pluginOptions___omitGoogleFont',
  pluginOptions___devMode = 'pluginOptions___devMode',
  pluginOptions___googleAnalytics___trackingId = 'pluginOptions___googleAnalytics___trackingId',
  pluginOptions___googleAnalytics___cookieName = 'pluginOptions___googleAnalytics___cookieName',
  pluginOptions___googleAnalytics___anonymize = 'pluginOptions___googleAnalytics___anonymize',
  pluginOptions___googleAnalytics___allowAdFeatures = 'pluginOptions___googleAnalytics___allowAdFeatures',
  pluginOptions___googleTagManager___cookieName = 'pluginOptions___googleTagManager___cookieName',
  pluginOptions___googleTagManager___dataLayerName = 'pluginOptions___googleTagManager___dataLayerName',
  pluginOptions___facebookPixel___cookieName = 'pluginOptions___facebookPixel___cookieName',
  pluginOptions___environments = 'pluginOptions___environments',
  pluginOptions___color = 'pluginOptions___color',
  pluginOptions___showSpinner = 'pluginOptions___showSpinner',
  pluginOptions___name = 'pluginOptions___name',
  pluginOptions___path = 'pluginOptions___path',
  pluginOptions___base64Width = 'pluginOptions___base64Width',
  pluginOptions___stripMetadata = 'pluginOptions___stripMetadata',
  pluginOptions___defaultQuality = 'pluginOptions___defaultQuality',
  pluginOptions___failOnError = 'pluginOptions___failOnError',
  pluginOptions___target = 'pluginOptions___target',
  pluginOptions___rel = 'pluginOptions___rel',
  pluginOptions___maxWidth = 'pluginOptions___maxWidth',
  pluginOptions___linkImagesToOriginal = 'pluginOptions___linkImagesToOriginal',
  pluginOptions___showCaptions = 'pluginOptions___showCaptions',
  pluginOptions___markdownCaptions = 'pluginOptions___markdownCaptions',
  pluginOptions___sizeByPixelDensity = 'pluginOptions___sizeByPixelDensity',
  pluginOptions___backgroundColor = 'pluginOptions___backgroundColor',
  pluginOptions___quality = 'pluginOptions___quality',
  pluginOptions___withWebp = 'pluginOptions___withWebp',
  pluginOptions___tracedSVG = 'pluginOptions___tracedSVG',
  pluginOptions___loading = 'pluginOptions___loading',
  pluginOptions___decoding = 'pluginOptions___decoding',
  pluginOptions___disableBgImageOnAlpha = 'pluginOptions___disableBgImageOnAlpha',
  pluginOptions___disableBgImage = 'pluginOptions___disableBgImage',
  pluginOptions___linkStyles = 'pluginOptions___linkStyles',
  pluginOptions___pathCheck = 'pluginOptions___pathCheck',
  pluginOptions___allExtensions = 'pluginOptions___allExtensions',
  pluginOptions___isTSX = 'pluginOptions___isTSX',
  pluginOptions___jsxPragma = 'pluginOptions___jsxPragma',
  nodeAPIs = 'nodeAPIs',
  browserAPIs = 'browserAPIs',
  ssrAPIs = 'ssrAPIs',
  pluginFilepath = 'pluginFilepath',
  packageJson___name = 'packageJson___name',
  packageJson___description = 'packageJson___description',
  packageJson___version = 'packageJson___version',
  packageJson___main = 'packageJson___main',
  packageJson___license = 'packageJson___license',
  packageJson___dependencies = 'packageJson___dependencies',
  packageJson___dependencies___name = 'packageJson___dependencies___name',
  packageJson___dependencies___version = 'packageJson___dependencies___version',
  packageJson___devDependencies = 'packageJson___devDependencies',
  packageJson___devDependencies___name = 'packageJson___devDependencies___name',
  packageJson___devDependencies___version = 'packageJson___devDependencies___version',
  packageJson___peerDependencies = 'packageJson___peerDependencies',
  packageJson___peerDependencies___name = 'packageJson___peerDependencies___name',
  packageJson___peerDependencies___version = 'packageJson___peerDependencies___version',
  packageJson___keywords = 'packageJson___keywords'
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>;
  parent?: Maybe<NodeFilterInput>;
  children?: Maybe<NodeFilterListInput>;
  internal?: Maybe<InternalFilterInput>;
  resolve?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  ssrAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
  __typename?: 'SitePluginGroupConnection';
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
  __typename?: 'SitePluginPackageJson';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  main?: Maybe<Scalars['String']>;
  license?: Maybe<Scalars['String']>;
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
  __typename?: 'SitePluginPackageJsonDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
  __typename?: 'SitePluginPackageJsonDevDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  main?: Maybe<StringQueryOperatorInput>;
  license?: Maybe<StringQueryOperatorInput>;
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
  keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
  __typename?: 'SitePluginPackageJsonPeerDependencies';
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
  __typename?: 'SitePluginPluginOptions';
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
  modulePath?: Maybe<Scalars['String']>;
  manualInit?: Maybe<Scalars['Boolean']>;
  sourceMap?: Maybe<Scalars['Boolean']>;
  autoLabel?: Maybe<Scalars['String']>;
  labelFormat?: Maybe<Scalars['String']>;
  cssPropOptimization?: Maybe<Scalars['Boolean']>;
  pathToConfigModule?: Maybe<Scalars['String']>;
  omitGoogleFont?: Maybe<Scalars['Boolean']>;
  devMode?: Maybe<Scalars['Boolean']>;
  googleAnalytics?: Maybe<SitePluginPluginOptionsGoogleAnalytics>;
  googleTagManager?: Maybe<SitePluginPluginOptionsGoogleTagManager>;
  facebookPixel?: Maybe<SitePluginPluginOptionsFacebookPixel>;
  environments?: Maybe<Array<Maybe<Scalars['String']>>>;
  color?: Maybe<Scalars['String']>;
  showSpinner?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  path?: Maybe<Scalars['String']>;
  base64Width?: Maybe<Scalars['Int']>;
  stripMetadata?: Maybe<Scalars['Boolean']>;
  defaultQuality?: Maybe<Scalars['Int']>;
  failOnError?: Maybe<Scalars['Boolean']>;
  target?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  decoding?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
  linkStyles?: Maybe<Scalars['Boolean']>;
  pathCheck?: Maybe<Scalars['Boolean']>;
  allExtensions?: Maybe<Scalars['Boolean']>;
  isTSX?: Maybe<Scalars['Boolean']>;
  jsxPragma?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFacebookPixel = {
  __typename?: 'SitePluginPluginOptionsFacebookPixel';
  cookieName?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsFacebookPixelFilterInput = {
  cookieName?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
  modulePath?: Maybe<StringQueryOperatorInput>;
  manualInit?: Maybe<BooleanQueryOperatorInput>;
  sourceMap?: Maybe<BooleanQueryOperatorInput>;
  autoLabel?: Maybe<StringQueryOperatorInput>;
  labelFormat?: Maybe<StringQueryOperatorInput>;
  cssPropOptimization?: Maybe<BooleanQueryOperatorInput>;
  pathToConfigModule?: Maybe<StringQueryOperatorInput>;
  omitGoogleFont?: Maybe<BooleanQueryOperatorInput>;
  devMode?: Maybe<BooleanQueryOperatorInput>;
  googleAnalytics?: Maybe<SitePluginPluginOptionsGoogleAnalyticsFilterInput>;
  googleTagManager?: Maybe<SitePluginPluginOptionsGoogleTagManagerFilterInput>;
  facebookPixel?: Maybe<SitePluginPluginOptionsFacebookPixelFilterInput>;
  environments?: Maybe<StringQueryOperatorInput>;
  color?: Maybe<StringQueryOperatorInput>;
  showSpinner?: Maybe<BooleanQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  path?: Maybe<StringQueryOperatorInput>;
  base64Width?: Maybe<IntQueryOperatorInput>;
  stripMetadata?: Maybe<BooleanQueryOperatorInput>;
  defaultQuality?: Maybe<IntQueryOperatorInput>;
  failOnError?: Maybe<BooleanQueryOperatorInput>;
  target?: Maybe<StringQueryOperatorInput>;
  rel?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  decoding?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
  linkStyles?: Maybe<BooleanQueryOperatorInput>;
  pathCheck?: Maybe<BooleanQueryOperatorInput>;
  allExtensions?: Maybe<BooleanQueryOperatorInput>;
  isTSX?: Maybe<BooleanQueryOperatorInput>;
  jsxPragma?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsGoogleAnalytics = {
  __typename?: 'SitePluginPluginOptionsGoogleAnalytics';
  trackingId?: Maybe<Scalars['String']>;
  cookieName?: Maybe<Scalars['String']>;
  anonymize?: Maybe<Scalars['Boolean']>;
  allowAdFeatures?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsGoogleAnalyticsFilterInput = {
  trackingId?: Maybe<StringQueryOperatorInput>;
  cookieName?: Maybe<StringQueryOperatorInput>;
  anonymize?: Maybe<BooleanQueryOperatorInput>;
  allowAdFeatures?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsGoogleTagManager = {
  __typename?: 'SitePluginPluginOptionsGoogleTagManager';
  cookieName?: Maybe<Scalars['String']>;
  dataLayerName?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsGoogleTagManagerFilterInput = {
  cookieName?: Maybe<StringQueryOperatorInput>;
  dataLayerName?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
  __typename?: 'SitePluginPluginOptionsPlugins';
  resolve?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>;
  id?: Maybe<StringQueryOperatorInput>;
  name?: Maybe<StringQueryOperatorInput>;
  version?: Maybe<StringQueryOperatorInput>;
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
  nodeAPIs?: Maybe<StringQueryOperatorInput>;
  browserAPIs?: Maybe<StringQueryOperatorInput>;
  pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
  __typename?: 'SitePluginPluginOptionsPluginsPluginOptions';
  target?: Maybe<Scalars['String']>;
  rel?: Maybe<Scalars['String']>;
  maxWidth?: Maybe<Scalars['Int']>;
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>;
  showCaptions?: Maybe<Scalars['Boolean']>;
  markdownCaptions?: Maybe<Scalars['Boolean']>;
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>;
  backgroundColor?: Maybe<Scalars['String']>;
  quality?: Maybe<Scalars['Int']>;
  withWebp?: Maybe<Scalars['Boolean']>;
  tracedSVG?: Maybe<Scalars['Boolean']>;
  loading?: Maybe<Scalars['String']>;
  decoding?: Maybe<Scalars['String']>;
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>;
  disableBgImage?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  target?: Maybe<StringQueryOperatorInput>;
  rel?: Maybe<StringQueryOperatorInput>;
  maxWidth?: Maybe<IntQueryOperatorInput>;
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>;
  showCaptions?: Maybe<BooleanQueryOperatorInput>;
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>;
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>;
  backgroundColor?: Maybe<StringQueryOperatorInput>;
  quality?: Maybe<IntQueryOperatorInput>;
  withWebp?: Maybe<BooleanQueryOperatorInput>;
  tracedSVG?: Maybe<BooleanQueryOperatorInput>;
  loading?: Maybe<StringQueryOperatorInput>;
  decoding?: Maybe<StringQueryOperatorInput>;
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>;
  disableBgImage?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
  __typename?: 'SiteSiteMetadata';
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>;
  description?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
  order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export enum SortOrderEnum {
  ASC = 'ASC',
  DESC = 'DESC'
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>;
  ne?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Maybe<Scalars['String']>>>;
  nin?: Maybe<Array<Maybe<Scalars['String']>>>;
  regex?: Maybe<Scalars['String']>;
  glob?: Maybe<Scalars['String']>;
};

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone?: Maybe<DuotoneGradient>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  cropFocus?: Maybe<ImageCropFocus>;
  fit?: Maybe<ImageFit>;
};

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>;
};

export type PageFragmentFragment = (
  { __typename?: 'MarkdownRemark' }
  & Pick<MarkdownRemark, 'html'>
  & { frontmatter?: Maybe<(
    { __typename?: 'MarkdownRemarkFrontmatter' }
    & Pick<MarkdownRemarkFrontmatter, 'title'>
    & { pageGraphics?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterPageGraphics' }
      & { featuredImage?: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp?: Maybe<(
          { __typename?: 'ImageSharp' }
          & Pick<ImageSharp, 'gatsbyImageData'>
        )> }
      )> }
    )> }
  )>, fields?: Maybe<(
    { __typename?: 'MarkdownRemarkFields' }
    & Pick<MarkdownRemarkFields, 'locale'>
  )> }
);

export type EventFragmentFragment = (
  { __typename?: 'MarkdownRemark' }
  & Pick<MarkdownRemark, 'id' | 'html'>
  & { fields?: Maybe<(
    { __typename?: 'MarkdownRemarkFields' }
    & Pick<MarkdownRemarkFields, 'locale'>
  )>, frontmatter?: Maybe<(
    { __typename?: 'MarkdownRemarkFrontmatter' }
    & Pick<MarkdownRemarkFrontmatter, 'title' | 'slug'>
    & { eventInformation?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterEventInformation' }
      & Pick<MarkdownRemarkFrontmatterEventInformation, 'livestreamUrl'>
      & { startTime?: Maybe<(
        { __typename?: 'MarkdownRemarkFrontmatterEventInformationStartTime' }
        & Pick<MarkdownRemarkFrontmatterEventInformationStartTime, 'datetime' | 'timezone'>
      )>, endTime?: Maybe<(
        { __typename?: 'MarkdownRemarkFrontmatterEventInformationEndTime' }
        & Pick<MarkdownRemarkFrontmatterEventInformationEndTime, 'datetime' | 'timezone'>
      )> }
    )>, eventSchedule?: Maybe<Array<Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterEventSchedule' }
      & Pick<MarkdownRemarkFrontmatterEventSchedule, 'title' | 'description'>
      & { startTime?: Maybe<(
        { __typename?: 'MarkdownRemarkFrontmatterEventScheduleStartTime' }
        & Pick<MarkdownRemarkFrontmatterEventScheduleStartTime, 'datetime' | 'timezone'>
      )> }
    )>>>, eventGraphics?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterEventGraphics' }
      & { favicon?: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp?: Maybe<(
          { __typename?: 'ImageSharp' }
          & Pick<ImageSharp, 'gatsbyImageData'>
        )> }
      )>, headerLogo?: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp?: Maybe<(
          { __typename?: 'ImageSharp' }
          & Pick<ImageSharp, 'gatsbyImageData'>
        )> }
      )>, lobbyImage?: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp?: Maybe<(
          { __typename?: 'ImageSharp' }
          & Pick<ImageSharp, 'gatsbyImageData'>
        )> }
      )> }
    )>, eventBranding?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterEventBranding' }
      & Pick<MarkdownRemarkFrontmatterEventBranding, 'primaryColor' | 'primaryColorHover'>
    )>, eventRooms?: Maybe<Array<Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterEventRoom' }
      & Pick<MarkdownRemarkFrontmatterEventRoom, 'slug' | 'title' | 'description'>
      & { image?: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp?: Maybe<(
          { __typename?: 'ImageSharp' }
          & Pick<ImageSharp, 'gatsbyImageData'>
        )> }
      )> }
    )>>>, eventQA?: Maybe<Array<Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterEventQA' }
      & Pick<MarkdownRemarkFrontmatterEventQa, 'answer' | 'question'>
    )>>>, eventSettings?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterEventSettings' }
      & Pick<MarkdownRemarkFrontmatterEventSettings, 'allEvents' | 'allEventsLabel' | 'mainStage' | 'mainStageLabel' | 'mainStageFeature' | 'chat' | 'chatLabel' | 'schedule' | 'scheduleLabel' | 'rooms' | 'roomsLabel' | 'qa' | 'qaLabel' | 'map' | 'mapLabel'>
    )> }
  )> }
);

export type EventsFragmentFragment = (
  { __typename?: 'MarkdownRemark' }
  & Pick<MarkdownRemark, 'id'>
  & { fields?: Maybe<(
    { __typename?: 'MarkdownRemarkFields' }
    & Pick<MarkdownRemarkFields, 'locale'>
  )>, frontmatter?: Maybe<(
    { __typename?: 'MarkdownRemarkFrontmatter' }
    & Pick<MarkdownRemarkFrontmatter, 'title' | 'slug'>
    & { eventInformation?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterEventInformation' }
      & { startTime?: Maybe<(
        { __typename?: 'MarkdownRemarkFrontmatterEventInformationStartTime' }
        & Pick<MarkdownRemarkFrontmatterEventInformationStartTime, 'datetime' | 'timezone'>
      )>, endTime?: Maybe<(
        { __typename?: 'MarkdownRemarkFrontmatterEventInformationEndTime' }
        & Pick<MarkdownRemarkFrontmatterEventInformationEndTime, 'datetime' | 'timezone'>
      )> }
    )>, eventGraphics?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterEventGraphics' }
      & { lobbyImage?: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp?: Maybe<(
          { __typename?: 'ImageSharp' }
          & Pick<ImageSharp, 'gatsbyImageData'>
        )> }
      )> }
    )>, eventBranding?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterEventBranding' }
      & Pick<MarkdownRemarkFrontmatterEventBranding, 'primaryColor' | 'primaryColorHover'>
    )> }
  )> }
);

export type ConfigurationFragmentFragment = (
  { __typename?: 'MarkdownRemark' }
  & { frontmatter?: Maybe<(
    { __typename?: 'MarkdownRemarkFrontmatter' }
    & Pick<MarkdownRemarkFrontmatter, 'title' | 'description' | 'siteUrl'>
    & { colors?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterColors' }
      & Pick<MarkdownRemarkFrontmatterColors, 'primaryColor' | 'primaryColorHover' | 'darkModeOnColor' | 'darkModeOffColor'>
    )>, graphics?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterGraphics' }
      & { logo?: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp?: Maybe<(
          { __typename?: 'ImageSharp' }
          & Pick<ImageSharp, 'gatsbyImageData'>
        )> }
      )>, favicon?: Maybe<(
        { __typename?: 'File' }
        & { childImageSharp?: Maybe<(
          { __typename?: 'ImageSharp' }
          & Pick<ImageSharp, 'gatsbyImageData'>
        )> }
      )> }
    )>, socialLogin?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterSocialLogin' }
      & Pick<MarkdownRemarkFrontmatterSocialLogin, 'facebook' | 'google' | 'twitter' | 'github'>
    )> }
  )> }
);

export type CookiesFragmentFragment = (
  { __typename?: 'MarkdownRemark' }
  & { frontmatter?: Maybe<(
    { __typename?: 'MarkdownRemarkFrontmatter' }
    & { cookieNotification?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterCookieNotification' }
      & Pick<MarkdownRemarkFrontmatterCookieNotification, 'title' | 'content'>
    )>, necessaryCookies?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterNecessaryCookies' }
      & Pick<MarkdownRemarkFrontmatterNecessaryCookies, 'title' | 'content'>
    )>, analyticsCookies?: Maybe<(
      { __typename?: 'MarkdownRemarkFrontmatterAnalyticsCookies' }
      & Pick<MarkdownRemarkFrontmatterAnalyticsCookies, 'enabled' | 'title' | 'content'>
    )> }
  )> }
);

export type Unnamed_1_QueryVariables = Exact<{
  locale: Scalars['String'];
  defaultLocale: Scalars['String'];
}>;


export type Unnamed_1_Query = (
  { __typename?: 'Query' }
  & { config?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & ConfigurationFragmentFragment
  )>, defaultConfig?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & ConfigurationFragmentFragment
  )>, cookies?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & CookiesFragmentFragment
  )>, defaultCookies?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & CookiesFragmentFragment
  )> }
);

export type Unnamed_2_QueryVariables = Exact<{
  locale: Scalars['String'];
  defaultLocale: Scalars['String'];
}>;


export type Unnamed_2_Query = (
  { __typename?: 'Query' }
  & { config?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & ConfigurationFragmentFragment
  )>, defaultConfig?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & ConfigurationFragmentFragment
  )>, cookies?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & CookiesFragmentFragment
  )>, defaultCookies?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & CookiesFragmentFragment
  )> }
);

export type Unnamed_3_QueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Scalars['String'];
  defaultLocale: Scalars['String'];
}>;


export type Unnamed_3_Query = (
  { __typename?: 'Query' }
  & { event?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & EventFragmentFragment
  )>, defaultEvent?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & EventFragmentFragment
  )>, config?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & ConfigurationFragmentFragment
  )>, defaultConfig?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & ConfigurationFragmentFragment
  )>, cookies?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & CookiesFragmentFragment
  )>, defaultCookies?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & CookiesFragmentFragment
  )> }
);

export type EventsQueryQueryVariables = Exact<{
  skip: Scalars['Int'];
  limit: Scalars['Int'];
  locale: Scalars['String'];
  defaultLocale: Scalars['String'];
}>;


export type EventsQueryQuery = (
  { __typename?: 'Query' }
  & { site?: Maybe<(
    { __typename?: 'Site' }
    & { siteMetadata?: Maybe<(
      { __typename?: 'SiteSiteMetadata' }
      & Pick<SiteSiteMetadata, 'title'>
    )> }
  )>, events: (
    { __typename?: 'MarkdownRemarkConnection' }
    & Pick<MarkdownRemarkConnection, 'totalCount'>
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & EventsFragmentFragment
      ) }
    )> }
  ), defaultEvents: (
    { __typename?: 'MarkdownRemarkConnection' }
    & Pick<MarkdownRemarkConnection, 'totalCount'>
    & { edges: Array<(
      { __typename?: 'MarkdownRemarkEdge' }
      & { node: (
        { __typename?: 'MarkdownRemark' }
        & EventsFragmentFragment
      ) }
    )> }
  ), config?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & ConfigurationFragmentFragment
  )>, cookies?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & CookiesFragmentFragment
  )> }
);

export type Unnamed_4_QueryVariables = Exact<{
  slug: Scalars['String'];
  locale: Scalars['String'];
  defaultLocale: Scalars['String'];
}>;


export type Unnamed_4_Query = (
  { __typename?: 'Query' }
  & { page?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & PageFragmentFragment
  )>, defaultPage?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & PageFragmentFragment
  )>, config?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & ConfigurationFragmentFragment
  )>, defaultConfig?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & ConfigurationFragmentFragment
  )>, cookies?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & CookiesFragmentFragment
  )>, defaultCookies?: Maybe<(
    { __typename?: 'MarkdownRemark' }
    & CookiesFragmentFragment
  )> }
);
