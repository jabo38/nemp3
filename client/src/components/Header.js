import React from 'react';
import { Link } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';
import Spinner from './Spinner';
import '../style/header.css';

const Header = ({ user }) => {
  function authStatus() {
    if (user.isLoading) return <Spinner setClass="spinner-small" />;
    if (!user.isLoggedIn) return null;

    return (
      <span>
        {user.auth.googleId && (
          <FontAwesome name="google" className="icon-left google-icon" />
        )}
        {user.auth.email}
      </span>
    );
  }

  return (
    <div>
      <div className="gradient" />
      <header className="container-fluid" id="header">
        <div className="row">
          <div className="col-lg-2" />
          <div className="col-lg-8">
            <Link to="/">
              <svg
                className="header-logo"
                width="500"
                height="157.89"
                version="1.1"
                viewBox="0 0 500.00006 157.887"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m8.8327 8.3738-4.4164 113.37 4.4164 4.4164h26.704v-67.368l35.049 62.952 4.418 4.4164h27.316v-115.77l-4.423-4.4147-22.281 4.4147v84.007l-39.073-66.765z"
                  style={{ fill: '#5ab3e8' }}
                />
                <path
                  d="m4.4164 3.9591-4.4164 113.36 4.4164 4.4164h26.704v-67.387l35.048 62.965 4.4164 4.418h27.3v-115.76l-4.4048-4.423-22.286 4.423v84.003l-39.078-66.759z"
                  style={{ fill: '#41ce7c' }}
                />
                <path
                  d="m91.272 115.11h-23.838l-42.943-73.302v73.302h-22.286v-111.35h23.838l42.943 73.378v-73.378h22.286z"
                  style={{ fill: '#666' }}
                />
                <path
                  d="m0 1.5538v115.77h26.704v-67.372l39.464 67.372h27.316v-115.77h-26.704v67.445l-39.467-67.446zm4.4164 4.418h20.366l46.416 79.315v-79.315h17.867v106.93h-20.369l-46.411-79.233v79.233h-17.869z"
                  style={{ fill: '#fff' }}
                />
                <path
                  d="m111.15 10.387-4.4164 111.35 4.4164 4.4164h80.75v-26.704l-4.4197-4.4147-49.623 4.423v-17.793h36.57v-26.704l-4.4197-4.4147-32.154 4.4164v-17.876h54.043v-26.704l-4.4197-4.4147z"
                  style={{ fill: '#5ab3e8' }}
                />
                <path
                  d="m106.73 5.9718-4.4164 111.35 4.4164 4.4147h80.747v-26.704l-4.4164-4.418-49.63 4.4197v-17.793h36.577v-26.699l-4.418-4.4197-32.157 4.4197v-17.871h54.053v-26.704l-4.4246-4.418z"
                  style={{ fill: '#41ce7c' }}
                />
                <path
                  d="m180.86 115.11h-76.33v-111.35h76.33v22.286h-54.046v22.286h36.577v22.284h-36.577v22.209h54.046z"
                  style={{ fill: '#666' }}
                />
                <path
                  d="m102.32 1.5538v115.77h80.747v-26.704h-54.045v-17.791h36.573v-26.704h-36.573v-17.864h54.045v-26.707zm4.4164 4.418h71.914v17.866h-54.043v26.707h36.572v17.866h-36.572v26.626h54.043v17.867h-71.914z"
                  style={{ fill: '#fff' }}
                />
                <path
                  d="m236.33 8.836c-4.8868 0-9.55.94423-13.915 2.8211-4.2855 1.8139-8.0806 4.36-11.331 7.6102-3.2054 3.2137-5.7482 7.0072-7.6102 11.331l-.003.01657-.003.01656c-1.8255 4.3236-2.7366 8.9453-2.7366 13.832l-4.4164 77.293 4.4164 4.4164h26.704v-81.734c0-1.2805.23191-2.4186.67918-3.4854.4688-1.1099 1.0817-2.021 1.8586-2.7996.83987-.84484 1.7791-1.4743 2.8708-1.9382 1.0768-.44727 2.2198-.67918 3.4953-.67918 1.2921 0 2.4351.23192 3.4953.67918 1.0768.44727 1.9878 1.0768 2.7499 1.8885l.0497.03976.0497.03976c.82827.77858 1.4412 1.6731 1.8885 2.7532.46383 1.0602.67918 2.2032.67918 3.4787l-4.4064 77.311 4.423 4.418h26.704v-81.716c0-1.2838.23192-2.4235.67918-3.4887.46384-1.1099 1.0768-2.021 1.8553-2.7996.84484-.84484 1.7891-1.4743 2.8824-1.9382 1.0602-.44727 2.2032-.67918 3.4953-.67918 1.2921 0 2.4186.23192 3.4953.67918 1.0933.45389 1.9878 1.0768 2.7664 1.8934l.0331.04473.0497.03976c.82828.77858 1.4412 1.6731 1.905 2.7565l.0166.02982.0166.03313c.49697 1.0536.72888 2.1651.72888 3.4241l-4.4064 77.311 4.4064 4.4147h26.637v-81.717c0-4.8818-.94423-9.5169-2.8161-13.832-1.8056-4.3352-4.3733-8.137-7.6201-11.342v-.0083c-3.1971-3.2468-6.9906-5.7896-11.314-7.5986-4.3153-1.8769-8.9453-2.8161-13.832-2.8161-4.4064 0-8.6803.80177-12.764 2.402-3.4456 1.3252-6.5599 3.2932-9.4423 5.6654-2.899-2.3738-6.0464-4.3451-9.5417-5.6704-4.0751-1.5903-8.3374-2.402-12.739-2.402z"
                  style={{ fill: '#5ab3e8' }}
                />
                <path
                  d="m231.92 4.4197c-4.8835 0-9.5417.93926-13.905 2.8161-4.2904 1.8139-8.0889 4.3617-11.341 7.6151-3.2054 3.2038-5.7482 6.9989-7.6135 11.327v.0033l-.003.0066c-1.8255 4.307-2.7366 8.9453-2.7366 13.816l-4.4164 77.311 4.4164 4.4064h26.704v-81.716c0-1.2822.22694-2.4219.67918-3.487.46383-1.1016 1.0768-2.0127 1.8553-2.7913.83987-.83821 1.7824-1.4743 2.8741-1.9332 1.0652-.45058 2.2032-.67918 3.487-.67918 1.2838 0 2.4235.2286 3.4887.67918 1.0801.45721 1.9763 1.0768 2.7532 1.8967l.0381.03644.0497.03976c.82827.77195 1.4412 1.6681 1.905 2.7499.44727 1.0652.67919 2.2032.67919 3.487l-4.4064 77.311 4.423 4.4064h26.687v-81.716c0-1.2822.23192-2.4219.67918-3.487.46383-1.0933 1.0768-2.0044 1.8553-2.783.84484-.83987 1.7891-1.4743 2.8824-1.9382 1.0768-.44727 2.2032-.67918 3.4953-.67918 1.2921 0 2.4186.23192 3.4953.67918 1.0933.45886 1.9879 1.0768 2.7499 1.8984l.0497.0497.0497.03313c.82827.77858 1.4412 1.6731 1.905 2.7499l.0166.03313.0166.03313c.49696 1.0602.72888 2.1701.72888 3.429l-4.4064 77.311 4.423 4.423h26.621v-81.752c0-4.8802-.94423-9.5152-2.8161-13.832-1.8222-4.3302-4.3567-8.127-7.6201-11.331-3.1971-3.2501-6.9906-5.7979-11.314-7.6035-4.3236-1.8835-8.9619-2.8244-13.849-2.8244-4.4064 0-8.6803.79514-12.755 2.3937v.00994c-3.4456 1.3252-6.5599 3.2866-9.4423 5.6654-2.8824-2.3854-6.0298-4.3517-9.5251-5.677-4.0751-1.5903-8.3324-2.402-12.739-2.402z"
                  style={{ fill: '#41ce7c' }}
                />
                <path
                  d="m305.38 115.11h-22.208v-79.514q0-2.3291-.93263-4.3484-.8614-2.0177-2.4186-3.4953-1.4743-1.5522-3.4953-2.4053-2.021-.85478-4.3567-.85478t-4.3567.85478q-2.021.85312-3.5781 2.407-1.4743 1.4743-2.3357 3.4953-.86141 2.0177-.86141 4.3468v79.514h-22.281v-79.514q0-2.3291-.86141-4.3484-.8614-2.0177-2.4186-3.4953-1.4743-1.5522-3.4953-2.4053-2.021-.85478-4.3567-.85478t-4.3567.85478q-2.021.85312-3.5781 2.407-1.4743 1.4743-2.3357 3.4953-.8614 2.0177-.8614 4.3468v79.514h-22.281v-79.514q0-6.9111 2.5676-12.967 2.6505-6.1325 7.1563-10.638 4.5721-4.5803 10.635-7.143 6.1292-2.6405 13.037-2.6405 6.212 0 11.96 2.2529 5.7482 2.1734 10.32 6.3661 4.5721-4.1911 10.237-6.3678 5.7482-2.2529 11.96-2.2529 6.9078 0 12.971 2.6422 6.1292 2.5627 10.635 7.143 4.5754 4.5058 7.1397 10.638 2.6372 6.0563 2.6372 12.967z"
                  style={{ fill: '#666' }}
                />
                <path
                  d="m227.5 3.4082e-6c-4.8868 0-9.55.94423-13.915 2.8211-4.2855 1.8139-8.0806 4.36-11.331 7.6102-3.2054 3.2038-5.7482 6.9989-7.6102 11.327l-.003.0066h-.003c-1.8255 4.307-2.7333 8.9453-2.7333 13.816v81.734h26.704v-81.716c0-1.2822.22694-2.4219.67918-3.487.46383-1.1033 1.0768-2.0144 1.8553-2.7929.83987-.84484 1.7791-1.4743 2.8708-1.9382 1.0652-.44727 2.2032-.67918 3.487-.67918 1.2838 0 2.4219.23192 3.487.67918 1.0817.44727 1.9779 1.0768 2.7548 1.8885l.0381.03313.0414.03313c.81833.77858 1.4362 1.6731 1.8934 2.7499.46383 1.0602.69575 2.2032.69575 3.4787v81.734h26.704v-81.699c0-1.2822.23192-2.4219.67919-3.487.46383-1.1033 1.0768-2.0144 1.8553-2.7929.84484-.84484 1.7891-1.4743 2.8824-1.9382 1.0768-.44727 2.2032-.67918 3.4953-.67918 1.2921 0 2.4186.23192 3.4953.67918 1.0933.44727 1.9878 1.0768 2.7499 1.8885l.0497.03313.0497.03313c.8117.77858 1.4246 1.6731 1.8885 2.7499l.0166.03313.0166.03313c.4804 1.0436.72888 2.1535.72888 3.4125v81.734h26.62v-81.699c0-4.8818-.94423-9.5169-2.8161-13.832-1.8056-4.3319-4.3567-8.1336-7.6201-11.336-3.1971-3.2551-7.0072-5.8012-11.331-7.6135-4.3418-1.8736-8.9801-2.8178-13.867-2.8178-4.3981 0-8.6637.81171-12.744 2.402-3.4572 1.3252-6.5798 3.2965-9.4638 5.6654-2.8874-2.3689-6.0331-4.3401-9.5417-5.6654-4.0917-1.5903-8.349-2.402-12.755-2.402zm0 4.4197c3.8763 0 7.5737.69575 11.154 2.1005l.0116.00331.0132.00497c3.5732 1.3584 6.7587 3.3297 9.6162 5.947l1.4909 1.3584 1.4909-1.3584c2.8608-2.6173 6.0298-4.5886 9.5516-5.9304h.0331c3.5781-1.3915 7.2888-2.0872 11.165-2.0872 4.3236 0 8.3324.81171 12.093 2.4517l.0166.016565.0166.016565c3.8432 1.6068 7.1231 3.8101 9.9227 6.6593l.0166.01656.0166.01657c2.8492 2.7996 5.0525 6.0795 6.6593 9.9227v.01656l.0166.01656c1.64 3.7604 2.4683 7.7526 2.4683 12.076v77.294h-17.826v-77.361c0-1.8222-.381-3.6113-1.1264-5.2347-.67918-1.5737-1.6483-2.9818-2.8724-4.1579-1.1861-1.2258-2.5975-2.2032-4.1911-2.8824-1.6334-.67918-3.3959-1.0271-5.2181-1.0271s-3.5781.34788-5.2065 1.0271c-1.6068.67918-3.048 1.6565-4.2739 2.8824-1.1927 1.1927-2.132 2.6173-2.8045 4.2076-.69243 1.6234-1.027 3.3959-1.027 5.2181v77.294h-17.874v-77.329c0-1.8222-.34456-3.5815-1.0337-5.2082-.67919-1.5903-1.6566-3.005-2.8907-4.1877-1.1761-1.2325-2.5842-2.2148-4.1745-2.889-1.6234-.68747-3.3794-1.0271-5.2016-1.0271s-3.5781.33959-5.2016 1.0271c-1.5903.67918-3.048 1.6499-4.2739 2.8824-1.1927 1.1861-2.1204 2.6057-2.7996 4.1944-.67919 1.6267-1.0271 3.386-1.0271 5.2082v77.304h-17.874v-77.304c0-4.3335.79514-8.344 2.3854-12.103v-.0033c1.6565-3.8465 3.8763-7.1397 6.6759-9.936 2.8658-2.8559 6.1458-5.069 9.9393-6.6726l.0166-.00331.0166-.00331c3.81-1.64 7.852-2.4583 12.176-2.4583z"
                  style={{ fill: '#fff' }}
                />
                <path
                  d="m370.1 35.549c-2.8774 0-5.7316.35781-8.5478 1.0768-2.7797.70734-5.4798 1.6897-8.0922 2.9437-2.5511 1.1927-5.0094 2.6306-7.3832 4.302-1.0271.72391-1.2656 1.4511-1.6068 2.2595-.34456.80674-.63611 1.7294-.92435 2.7664-.57648 2.0707-1.1148 4.5886-1.64 7.095-.52512 2.5179-1.0386 5.0028-1.5207 6.9078-.0331.08283-.0497.11596-.0663.19879l-5.7648-6.8084-5.0028-16.135-4.3236.66262-4.423 112.65 4.4064 4.423h25.776v-35.8c.57979.31474 1.143.64605 1.7394.95582l.0166.003c1.8056.89453 3.6113 1.7228 5.4169 2.4682l.0331.0166h.0331c1.905.69575 3.81 1.2755 5.7151 1.7062h.0166c2.0044.44726 4.042.66261 6.063.66261 6.0961 0 11.877-1.0602 17.261-3.1806 5.4335-2.1204 10.204-5.185 14.246-9.1773 4.0917-4.0585 7.3219-8.9619 9.6577-14.644v-.0166c2.3357-5.7813 3.4953-12.242 3.4953-19.315 0-6.825-1.1596-13.103-3.5119-18.785-2.3357-5.682-5.566-10.585-9.6577-14.627-4.042-4.042-8.8128-7.1563-14.23-9.3264-5.4003-2.2363-11.182-3.3462-17.294-3.3462zm0 25.693c2.6339 0 5.0856.46383 7.4081 1.3965 2.3026.92435 4.2905 2.2413 5.9801 3.9923v.0099c1.6731 1.6731 3.0149 3.7604 4.0088 6.2949v.03313c1.0105 2.4848 1.5406 5.3506 1.5406 8.6306 0 3.1143-.53009 5.8973-1.5572 8.3987l-.0166.01656-.0166.01657c-.99393 2.5511-2.3357 4.6549-4.0254 6.3943-1.7228 1.7559-3.7107 3.0977-6.0298 4.0751-2.3192.9608-4.7543 1.4578-7.3716 1.4578s-5.0525-.4804-7.3716-1.4578c-2.286-.97736-4.2573-2.3357-5.9636-4.0917-1.7062-1.7394-3.0646-3.8598-4.1082-6.4108-.97737-2.5179-1.4743-5.3009-1.4743-8.4153 0-3.28.49696-6.1623 1.4743-8.6472 1.027-2.5511 2.402-4.6383 4.0917-6.328v-.01656c1.7062-1.7559 3.661-3.0812 5.9139-3.9923 2.3192-.92766 4.7708-1.3915 7.4048-1.3915z"
                  style={{ fill: '#5ab3e8' }}
                />
                <path
                  d="m365.68 31.131c-2.8758 0-5.7316.35947-8.5445 1.0768-2.783.709-5.4832 1.693-8.0939 2.9453-2.5511 1.1927-5.0127 2.6339-7.3882 4.307-1.0271.72888-1.259 1.4578-1.6035 2.2695-.34291.81171-.63777 1.7394-.92767 2.7664-.57316 2.0707-1.1132 4.5886-1.64 7.09-.52347 2.5179-1.0337 5.0028-1.5157 6.9244-.0199.08283-.0364.11596-.0547.18222l-5.7598-6.8084-4.9912-16.135-4.3203.66262-4.4164 112.65 4.4164 4.423h25.771v-35.781c.57979.31474 1.143.64605 1.7394.96079l.0166.0166v.0166c1.8056.9111 3.6113 1.7394 5.4169 2.4848l.0331.0166.0331.0166c1.8885.71232 3.7935 1.2755 5.6985 1.7228v.0166c2.021.44726 4.042.67918 6.0795.67918 6.0961 0 11.877-1.0602 17.261-3.1806 5.4335-2.1204 10.204-5.185 14.263-9.1773 4.0917-4.042 7.3219-8.9453 9.6411-14.627 2.3357-5.7813 3.4953-12.242 3.4953-19.315 0-6.825-1.1596-13.087-3.5119-18.769h-.0166c-2.3357-5.682-5.5494-10.569-9.6411-14.611-4.0419-4.0421-8.8127-7.1598-14.246-9.3431-5.4003-2.2363-11.182-3.3462-17.294-3.3462zm0 25.693c2.6372 0 5.0856.46383 7.4097 1.3948 2.3159.92767 4.2905 2.2446 5.9917 3.9956l.0133.0099.01.0083c1.683 1.6847 3.0149 3.7604 4.0055 6.3065l.007.01656.007.01657c1.0171 2.4948 1.5472 5.3573 1.5472 8.6389 0 3.1143-.52512 5.9006-1.5472 8.4086l-.007.01656-.007.01988c-.99062 2.5511-2.3308 4.6599-4.0254 6.4025-1.7129 1.7559-3.7007 3.1077-6.0298 4.0867-2.3192.97239-4.751 1.4578-7.3716 1.4578-2.6223 0-5.0574-.48702-7.3716-1.4578h-.007c-2.2728-.97736-4.2374-2.3258-5.9503-4.0867-1.6996-1.7443-3.0646-3.8647-4.1082-6.4191-.97736-2.513-1.4793-5.3043-1.4793-8.4252 0-3.2833.5069-6.1491 1.4743-8.6472 1.0436-2.5544 2.402-4.6416 4.0917-6.328l.008-.0116.0133-.01325c1.7096-1.7559 3.6643-3.0745 5.9238-3.9989 2.3225-.92766 4.7708-1.3915 7.4048-1.3915z"
                  style={{ fill: '#41ce7c' }}
                />
                <path
                  d="m339.99 146.79h-21.353v-114.84h5.122l8.4649 10.017q2.8724-2.7167 6.2899-5.1254 3.4125-2.407 7.0569-4.1149 3.7272-1.7858 7.6864-2.7962 3.9591-1.0105 8.0011-1.0105 8.7631 0 16.45 3.1855 7.7526 3.1143 13.501 8.8625 5.8145 5.7482 9.1607 13.898 3.3297 8.0839 3.3297 17.94 0 10.254-3.3462 18.487-3.3462 8.1668-9.1607 13.898-5.7482 5.682-13.517 8.6969-7.6864 3.0315-16.466 3.0315-2.7996 0-5.5991-.61292-2.7167-.61292-5.4335-1.6234-2.6505-1.0768-5.2844-2.402-2.5676-1.3087-4.9696-2.7167zm42.474-74.001q0-5.2794-1.7062-9.4721-1.6334-4.1944-4.5058-7.0668-2.8741-2.9652-6.7554-4.5058-3.8829-1.5572-8.233-1.5572-4.3468 0-8.2297 1.5406-3.8051 1.5406-6.6759 4.5058-2.8741 2.8658-4.5837 7.0569-1.63 4.1911-1.63 9.4754 0 5.0359 1.63 9.2435 1.7096 4.1911 4.582 7.1397t6.6759 4.5721q3.8846 1.6234 8.233 1.6234t8.233-1.64q3.8796-1.64 6.7537-4.5886 2.8724-2.9487 4.5058-7.1563 1.7062-4.1911 1.7062-9.2435z"
                  style={{ fill: '#666' }}
                />
                <path
                  d="m361.26 26.712c-2.8774 0-5.7283.36444-8.5428 1.0801-2.7747.70734-5.4699 1.6864-8.079 2.9354-2.5676 1.1927-5.0359 2.6173-7.4048 4.307-1.7062 1.1927-3.2137 2.5179-4.7377 3.8432l-7.7361-9.1441h-8.3639v119.27h25.771v-35.763c.58642.31475 1.148.64937 1.7476.95749l.005.008.01.007c1.8056.89453 3.6278 1.7228 5.4335 2.4682l.0331.0166.0497.0166c1.905.69575 3.81 1.2755 5.7151 1.7062h.0166c2.021.44727 4.042.67918 6.0795.67918 6.0961 0 11.877-1.0602 17.261-3.1806h.0166c5.4335-2.1204 10.204-5.1916 14.246-9.1773 4.1082-4.0519 7.3219-8.9536 9.6577-14.637 2.3523-5.7813 3.4953-12.225 3.4953-19.299 0-6.825-1.1596-13.103-3.4953-18.769-2.3192-5.6654-5.5329-10.569-9.6411-14.611-4.0254-4.0254-8.7962-7.1563-14.213-9.3264-5.4003-2.2363-11.182-3.3462-17.294-3.3462zm0 4.4197c5.5826 0 10.768 1.0072 15.616 3.0149l.0133.0033.0133.0066c4.915 1.9547 9.1474 4.7377 12.767 8.349h.0133c3.661 3.6113 6.5434 7.968 8.6803 13.153 2.1038 5.0856 3.1806 10.768 3.1806 17.096 0 6.5765-1.0768 12.441-3.1806 17.642-2.1204 5.185-5.0028 9.5417-8.6637 13.153-3.6113 3.5616-7.8355 6.2949-12.755 8.2165-4.8537 1.905-10.055 2.8658-15.654 2.8658-1.6897 0-3.3959-.19879-5.1022-.56323h-.0348c-1.7029-.39757-3.4075-.9111-5.122-1.5406-1.6897-.69575-3.3843-1.4743-5.0823-2.3192-1.6681-.8614-3.2866-1.7394-4.8504-2.6505l-3.3164-1.9216v38.896h-16.94v-110.37h1.8885l9.3131 11.016 1.6946-1.6019c1.8222-1.7361 3.8432-3.3794 6.0464-4.9249 2.1701-1.5323 4.4064-2.8393 6.7256-3.921v-.0033c2.3523-1.1265 4.7708-2.0044 7.2722-2.6505 2.4683-.61292 4.9365-.92766 7.4545-.92766z"
                  style={{ fill: '#fff' }}
                />
                <path
                  d="m361.26 52.408c2.6339 0 5.0856.46383 7.4114 1.3948 2.3159.9111 4.2905 2.2363 5.9917 3.9923h.0199c1.683 1.6731 3.0199 3.7604 4.0088 6.2949l.007.01656.007.01657c1.0171 2.4848 1.5472 5.3506 1.5472 8.6306 0 3.1143-.52512 5.8973-1.5472 8.3987l-.007.01656-.007.01657c-.99062 2.5511-2.3308 4.6549-4.0254 6.3943-1.7129 1.7559-3.7007 3.0977-6.0298 4.0751-2.3192.97736-4.7543 1.4578-7.3766 1.4578-2.6206 0-5.0525-.49696-7.3667-1.4578h-.007c-2.2728-.97736-4.2408-2.3357-5.9536-4.0917-1.6996-1.7394-3.0646-3.8763-4.1082-6.4274-.97405-2.5014-1.4743-5.3009-1.4743-8.4152 0-3.28.50194-6.1458 1.4694-8.6472 1.0436-2.5511 2.4053-4.6383 4.0917-6.328l.0116-.01656.01-.01657c1.7062-1.7559 3.661-3.0812 5.9205-3.9923 2.3241-.92767 4.7708-1.4081 7.4048-1.4081zm0-4.4197c-3.164 0-6.1955.56322-9.0497 1.7062h-.0166c-2.8095 1.143-5.301 2.8327-7.4213 5.0028h-.005c-2.1303 2.1369-3.81 4.7377-5.0442 7.7692l-.007.01657-.007.01656c-1.201 3.0812-1.7791 6.5268-1.7791 10.271 0 3.5947.58311 6.9575 1.7791 10.039l.007.01656.007.01657c1.2341 3.0315 2.9155 5.6654 5.0442 7.852 2.1138 2.1701 4.5953 3.8763 7.3882 5.069h.0166c2.8609 1.1927 5.9139 1.8056 9.0862 1.8056 3.1756 0 6.2286-.61292 9.0895-1.8056 2.8327-1.1927 5.3506-2.899 7.471-5.0856s3.7935-4.8371 4.9696-7.8686c1.2424-3.0812 1.8553-6.4605 1.8553-10.055 0-3.7604-.61293-7.206-1.8719-10.287-1.1762-3.0315-2.8493-5.6488-4.9696-7.8023-2.1369-2.1866-4.6549-3.8763-7.5207-5.0193-2.8493-1.143-5.8973-1.7228-9.0613-1.7228z"
                  style={{ fill: '#fff' }}
                />
                <path
                  d="m417.62 10.387-4.4164 22.289 4.4064 4.4164h46.781c1.2755 0 2.4186.23192 3.4788.67918 1.0768.46383 1.9713 1.0933 2.7499 1.905l.0331.0497.0331.0497c.81171.77858 1.4412 1.6731 1.8885 2.7499.44726 1.0768.67918 2.2032.67918 3.4953 0 1.2755-.23192 2.4517-.69575 3.5781-.46383 1.0933-1.0933 2.021-1.9216 2.8658-.77858.77858-1.6897 1.3915-2.7996 1.8553-1.0768.46383-2.2032.67918-3.4953.67918h-32.568l-4.3882 22.279 4.4197 4.4164h32.571c1.2822 0 2.4219.23192 3.487.67918 1.0768.46383 1.9746 1.0768 2.7499 1.9017l.0381.0497.0447.0497c.82331.77858 1.4412 1.6731 1.8984 2.7499.46384 1.0635.67919 2.2032.67919 3.487 0 1.2755-.21535 2.4186-.67919 3.4787-.46383 1.0933-1.0933 2.021-1.9216 2.8658-.77858.77858-1.6897 1.3915-2.783 1.8553-1.0602.44727-2.2032.67918-3.4787.67918h-46.799l-4.418 22.281 4.413 4.4064h46.781c4.8868 0 9.5301-.94424 13.849-2.8161 4.2739-1.8719 8.0409-4.4064 11.24-7.6201 3.2518-3.2468 5.8228-7.0403 7.6864-11.314 1.8885-4.3236 2.8261-8.9619 2.8261-13.849 0-4.3733-.8117-8.614-2.402-12.689-1.3666-3.545-3.3296-6.709-5.6737-9.608 2.3473-2.899 4.307-6.0298 5.677-9.5251h.005c1.5969-4.1248 2.402-8.3987 2.402-12.755 0-4.8868-.94423-9.5251-2.8244-13.849-1.8636-4.2905-4.4395-8.0508-7.6947-11.248l-.003-.01656c-3.1971-3.2303-6.9409-5.7979-11.215-7.6698-4.3236-1.8885-8.9619-2.8327-13.849-2.8327z"
                  style={{ fill: '#5ab3e8' }}
                />
                <path
                  d="m413.21 5.9718-4.418 22.287 4.4164 4.4064h46.781c1.2755 0 2.4186.23192 3.4788.67918 1.0768.44727 1.9713 1.0768 2.7499 1.8885l.0331.03313.0331.03313c.81171.77858 1.4412 1.6731 1.8885 2.7499.44727 1.0602.67919 2.2032.67919 3.4787s-.23192 2.4517-.69575 3.5781c-.46383 1.0768-1.0933 2.021-1.9216 2.8493-.77858.77858-1.6897 1.3915-2.7996 1.8553-1.0768.44727-2.2032.67918-3.4953.67918h-32.549l-4.413 22.281 4.418 4.4064h32.568c1.2822 0 2.4186.23192 3.487.67918 1.0801.44727 1.9763 1.0768 2.7499 1.8885l.0414.03313.0331.03313c.81999.77858 1.4412 1.6731 1.8984 2.7499.44727 1.0602.67919 2.2032.67919 3.4953 0 1.2755-.23192 2.4186-.67919 3.4787-.46383 1.0933-1.0933 2.0376-1.9382 2.8658-.77858.77858-1.6897 1.3915-2.7996 1.8553-1.0602.44727-2.2032.67918-3.4953.67918h-46.781l-4.4064 22.297 4.4064 4.4064h46.781c4.8868 0 9.5251-.94423 13.849-2.8327 4.2739-1.8719 8.0342-4.4064 11.231-7.6168 3.2468-3.2468 5.8145-7.0304 7.6864-11.314 1.8719-4.3236 2.8161-8.9619 2.8161-13.849 0-4.3567-.79514-8.5975-2.402-12.673-1.3584-3.5351-3.3297-6.6991-5.682-9.5997 2.3523-2.8923 4.3236-6.0348 5.682-9.5251v-.0083c1.6068-4.1248 2.402-8.3987 2.402-12.755 0-4.8901-.94423-9.5301-2.8161-13.849-1.8719-4.2789-4.4395-8.0425-7.6864-11.241-3.1971-3.2468-6.9575-5.8145-11.248-7.6864-4.3236-1.8719-8.9619-2.8161-13.849-2.8161z"
                  style={{ fill: '#41ce7c' }}
                />
                <path
                  d="m488.96 81.724q0 6.9111-2.6405 12.967-2.6405 6.0563-7.2225 10.638-4.5025 4.5058-10.559 7.1447-6.058 2.6389-12.971 2.6389h-44.569v-22.286h44.571q2.3357 0 4.3567-.85312 2.021-.85478 3.4953-2.3308 1.5572-1.5522 2.4186-3.5715.8614-2.021.8614-4.3567t-.84484-4.3567q-.8614-2.021-2.402-3.4953-1.4743-1.5572-3.4953-2.4186-2.021-.8614-4.3402-.8614h-30.383v-22.246h30.358q2.3357 0 4.3567-.85478 2.021-.85312 3.4953-2.3291 1.5522-1.5538 2.407-3.5715.84484-2.0972.84484-4.4263t-.8614-4.3484q-.86141-2.021-2.4186-3.4953-1.4743-1.5522-3.4953-2.407-2.021-.85312-4.3567-.85312h-44.576v-22.289h44.573q6.9128 0 12.971 2.6389 6.0563 2.6405 10.56 7.2225 4.577 4.5025 7.2225 10.56 2.6339 6.0563 2.6339 12.967 0 6.1342-2.2529 11.96-2.2529 5.7432-6.3694 10.325 4.1248 4.5886 6.3777 10.42 2.2529 5.7482 2.2529 11.877z"
                  style={{ fill: '#666' }}
                />
                <path
                  d="m408.79 1.5538v26.704h46.778c1.2921 0 2.4351.23192 3.4953.67918 1.0933.45886 1.9878 1.0768 2.7664 1.8934l.0497.0497.0497.0497c.82827.77858 1.4412 1.6731 1.905 2.7664.46383 1.0768.69575 2.2032.69575 3.4953 0 1.2755-.23192 2.4517-.67919 3.5781-.44726 1.0933-1.0933 2.021-1.9216 2.8658-.77858.77858-1.6897 1.3915-2.783 1.8553-1.0602.46383-2.2032.67918-3.4788.67918h-32.586v26.704h32.568c1.2871 0 2.4268.23192 3.4953.67918 1.0817.46383 1.9779 1.0768 2.7548 1.905l.0331.03313.0431.0497c.81171.77858 1.4412 1.6731 1.8885 2.7499.44726 1.0602.67918 2.2032.67918 3.4953s-.23192 2.4186-.67918 3.4953c-.46384 1.0933-1.0933 2.0376-1.9382 2.8658-.77858.77858-1.6897 1.3915-2.7996 1.8553-1.0602.46383-2.2032.67918-3.4953.67918h-46.796v26.704h46.781c4.8868 0 9.5284-.92766 13.849-2.8161 4.2739-1.8719 8.0376-4.4064 11.236-7.6036 3.2468-3.2468 5.8145-7.0237 7.6864-11.314 1.8802-4.307 2.8211-8.9619 2.8211-13.849 0-4.3567-.80177-8.5975-2.397-12.673-1.3749-3.545-3.3462-6.709-5.682-9.608 2.3357-2.8824 4.307-6.0298 5.6654-9.5251 1.5903-4.1248 2.402-8.3987 2.402-12.755 0-4.8868-.94424-9.5251-2.8327-13.849-1.8719-4.2739-4.4395-8.0343-7.6864-11.231-3.1971-3.2468-6.9575-5.8145-11.231-7.6864-4.3236-1.8885-8.9619-2.8327-13.849-2.8327zm4.4164 4.418h42.358c4.3236 0 8.3324.81999 12.076 2.4567 3.7935 1.6532 7.0569 3.8929 9.8564 6.7455l.0166.01325.0166.01325c2.8492 2.8045 5.0856 6.0746 6.7421 9.868 1.64 3.7554 2.4517 7.7576 2.4517 12.084 0 3.8183-.69575 7.5207-2.1038 11.162-1.4081 3.5864-3.3794 6.7885-5.9636 9.6477l-1.3252 1.4743 1.3252 1.4743c2.5676 2.8592 4.5389 6.0861 5.947 9.7289v.0099c1.3915 3.5781 2.0872 7.2557 2.0872 11.066 0 4.3236-.82827 8.3324-2.4682 12.076-1.6566 3.7935-3.8929 7.09-6.7587 9.9558-2.7996 2.7996-6.0795 5.0193-9.873 6.6759-3.7604 1.64-7.7692 2.4517-12.093 2.4517h-42.356v-17.839h42.408c1.8222 0 3.5781-.33794 5.2049-1.0271 1.5903-.67256 3.005-1.6118 4.1944-2.7996 1.2325-1.2325 2.2032-2.6753 2.8824-4.2739.68747-1.6284 1.0271-3.3876 1.0271-5.2115 0-1.8222-.33959-3.5815-1.0271-5.2082-.67421-1.5936-1.6565-3.005-2.8907-4.1877-1.1927-1.2325-2.6008-2.2148-4.1911-2.889-1.6234-.68747-3.3959-1.0271-5.2181-1.0271h-28.143v-17.871h28.161c1.8222 0 3.5864-.34125 5.2132-1.0271 1.5787-.67421 2.9984-1.6151 4.1911-2.8045 1.2258-1.2325 2.2032-2.6737 2.8741-4.2739v-.02816c.67918-1.6565 1.0271-3.429 1.0271-5.2512s-.34291-3.5781-1.0271-5.2016c-.67918-1.5903-1.6566-2.9983-2.894-4.1828-1.1795-1.2341-2.5908-2.2198-4.1828-2.889-1.6284-.67918-3.3876-1.0271-5.2115-1.0271h-42.358z"
                  style={{ fill: '#fff' }}
                />
              </svg>
            </Link>
          </div>
          <div className="col-lg-2 align-self-end user-admin">
            {authStatus()}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
