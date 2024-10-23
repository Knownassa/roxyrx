// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 5Zg9n9VVQm3GpGMqm4vDHh
// Component: ZskUfWdVMUuj

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import {
  Flex as Flex__,
  MultiChoiceArg,
  PlasmicDataSourceContextProvider as PlasmicDataSourceContextProvider__,
  PlasmicIcon as PlasmicIcon__,
  PlasmicImg as PlasmicImg__,
  PlasmicLink as PlasmicLink__,
  PlasmicPageGuard as PlasmicPageGuard__,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  Stack as Stack__,
  StrictProps,
  Trans as Trans__,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
  generateOnMutateForSpec,
  generateStateOnChangeProp,
  generateStateOnChangePropForCodeComponents,
  generateStateValueProp,
  get as $stateGet,
  hasVariant,
  initializeCodeComponentStates,
  initializePlasmicStates,
  makeFragment,
  omit,
  pick,
  renderPlasmicSlot,
  set as $stateSet,
  useCurrentUser,
  useDollarState,
  usePlasmicTranslator,
  useTrigger,
  wrapWithClassName
} from "@plasmicapp/react-web";
import {
  DataCtxReader as DataCtxReader__,
  useDataEnv,
  useGlobalActions
} from "@plasmicapp/react-web/lib/host";
import * as plasmicAuth from "@plasmicapp/react-web/lib/auth";
import { usePlasmicDataSourceContext } from "@plasmicapp/data-sources-context";
import {
  executePlasmicDataOp,
  usePlasmicDataOp,
  usePlasmicInvalidate
} from "@plasmicapp/react-web/lib/data-sources";

import { NavigationBar } from "@plasmicpkgs/plasmic-nav";
import LavenderButton from "../../LavenderButton"; // plasmic-import: MtQHjkr4cOvA/component
import { Fetcher } from "@plasmicapp/react-web/lib/data-sources";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_antd_5_hostless_css from "../antd_5_hostless/plasmic.module.css"; // plasmic-import: ohDidvG9XsCeFumugENU3J/projectcss
import projectcss from "./plasmic.module.css"; // plasmic-import: 5Zg9n9VVQm3GpGMqm4vDHh/projectcss
import sty from "./PlasmicReportStatusCheck.module.css"; // plasmic-import: ZskUfWdVMUuj/css

import CheckSvgIcon from "./icons/PlasmicIcon__CheckSvg"; // plasmic-import: W-5X1QmV8pcj/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: fHRKrUX_kYZ3/icon

createPlasmicElementProxy;

export type PlasmicReportStatusCheck__VariantMembers = {};
export type PlasmicReportStatusCheck__VariantsArgs = {};
type VariantPropType = keyof PlasmicReportStatusCheck__VariantsArgs;
export const PlasmicReportStatusCheck__VariantProps =
  new Array<VariantPropType>();

export type PlasmicReportStatusCheck__ArgsType = {};
type ArgPropType = keyof PlasmicReportStatusCheck__ArgsType;
export const PlasmicReportStatusCheck__ArgProps = new Array<ArgPropType>();

export type PlasmicReportStatusCheck__OverridesType = {
  root?: Flex__<"div">;
  navigationBar?: Flex__<typeof NavigationBar>;
  link?: Flex__<"a"> & Partial<LinkProps>;
  lavenderButton?: Flex__<typeof LavenderButton>;
  text?: Flex__<"div">;
};

export interface DefaultReportStatusCheckProps {}

const $$ = {};

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicReportStatusCheck__RenderFunc(props: {
  variants: PlasmicReportStatusCheck__VariantsArgs;
  args: PlasmicReportStatusCheck__ArgsType;
  overrides: PlasmicReportStatusCheck__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const args = React.useMemo(
    () =>
      Object.assign(
        {},
        Object.fromEntries(
          Object.entries(props.args).filter(([_, v]) => v !== undefined)
        )
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const __nextRouter = useNextRouter();
  const $ctx = useDataEnv?.() || {};
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = useCurrentUser?.() || {};

  let [$queries, setDollarQueries] = React.useState<
    Record<string, ReturnType<typeof usePlasmicDataOp>>
  >({});

  const new$Queries: Record<string, ReturnType<typeof usePlasmicDataOp>> = {
    roxyrx: usePlasmicDataOp(() => {
      return {
        sourceId: "sDrfqxHKPPovJA6Dwf86Xj",
        opId: "4d73220a-49b6-4530-a010-33efbf2794a2",
        userArgs: {},
        cacheKey: `plasmic.$.4d73220a-49b6-4530-a010-33efbf2794a2.$.`,
        invalidatedKeys: null,
        roleId: null
      };
    })
  };
  if (Object.keys(new$Queries).some(k => new$Queries[k] !== $queries[k])) {
    setDollarQueries(new$Queries);

    $queries = new$Queries;
  }

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{PlasmicReportStatusCheck.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicReportStatusCheck.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicReportStatusCheck.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicReportStatusCheck.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicReportStatusCheck.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicReportStatusCheck.pageMetadata.description}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_antd_5_hostless_css.plasmic_tokens,
            sty.root
          )}
        >
          <NavigationBar
            data-plasmic-name={"navigationBar"}
            data-plasmic-override={overrides.navigationBar}
            brand={
              <PlasmicLink__
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.all, projectcss.a, sty.link)}
                component={Link}
                href={"#"}
                platform={"nextjs"}
              >
                <PlasmicImg__
                  alt={""}
                  className={classNames(sty.img__uWOox)}
                  displayHeight={"40px"}
                  displayMaxHeight={"none"}
                  displayMaxWidth={"none"}
                  displayMinHeight={"0"}
                  displayMinWidth={"0"}
                  displayWidth={"auto"}
                  src={{
                    src: "/plasmic/roxy_landing_page/images/frame70Png.png",
                    fullWidth: 128,
                    fullHeight: 45,
                    aspectRatio: undefined
                  }}
                />
              </PlasmicLink__>
            }
            className={classNames("__wab_instance", sty.navigationBar)}
            closeButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img__kmeGg)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/close.svg"}
              />
            }
            itemsGap={8}
            menuItems={
              <LavenderButton
                data-plasmic-name={"lavenderButton"}
                data-plasmic-override={overrides.lavenderButton}
                className={classNames("__wab_instance", sty.lavenderButton)}
                transparent={true}
              >
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  {"Contact Us"}
                </div>
              </LavenderButton>
            }
            openButton={
              <PlasmicImg__
                alt={""}
                className={classNames(sty.img___3Gt91)}
                displayHeight={"auto"}
                displayMaxHeight={"none"}
                displayMaxWidth={"none"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"auto"}
                src={"https://static1.plasmic.app/menu.svg"}
              />
            }
            responsiveBreakpoint={768}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "navigationBar", "link", "lavenderButton", "text"],
  navigationBar: ["navigationBar", "link", "lavenderButton", "text"],
  link: ["link"],
  lavenderButton: ["lavenderButton", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  navigationBar: typeof NavigationBar;
  link: "a";
  lavenderButton: typeof LavenderButton;
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicReportStatusCheck__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicReportStatusCheck__VariantsArgs;
    args?: PlasmicReportStatusCheck__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicReportStatusCheck__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicReportStatusCheck__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: PlasmicDescendants[nodeName],
          internalArgPropNames: PlasmicReportStatusCheck__ArgProps,
          internalVariantPropNames: PlasmicReportStatusCheck__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicReportStatusCheck__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicReportStatusCheck";
  } else {
    func.displayName = `PlasmicReportStatusCheck.${nodeName}`;
  }
  return func;
}

function withUsePlasmicAuth<P extends object>(
  WrappedComponent: React.ComponentType<P>
) {
  const WithUsePlasmicAuthComponent: React.FC<P> = props => {
    const dataSourceCtx = usePlasmicDataSourceContext() ?? {};
    const { isUserLoading, user, token } = plasmicAuth.usePlasmicAuth({
      appId: "5Zg9n9VVQm3GpGMqm4vDHh"
    });

    return (
      <PlasmicDataSourceContextProvider__
        value={{
          ...dataSourceCtx,
          isUserLoading,
          userAuthToken: token,
          user
        }}
      >
        <WrappedComponent {...props} />
      </PlasmicDataSourceContextProvider__>
    );
  };
  return WithUsePlasmicAuthComponent;
}

export const PlasmicReportStatusCheck = Object.assign(
  // Top-level PlasmicReportStatusCheck renders the root element
  withUsePlasmicAuth(makeNodeComponent("root")),
  {
    // Helper components rendering sub-elements
    navigationBar: makeNodeComponent("navigationBar"),
    link: makeNodeComponent("link"),
    lavenderButton: makeNodeComponent("lavenderButton"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for PlasmicReportStatusCheck
    internalVariantProps: PlasmicReportStatusCheck__VariantProps,
    internalArgProps: PlasmicReportStatusCheck__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Report Status Check",
      description: "Check your form submission report status",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicReportStatusCheck;
/* prettier-ignore-end */