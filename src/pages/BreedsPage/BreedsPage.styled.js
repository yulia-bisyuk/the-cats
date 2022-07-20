import styled from "styled-components";

const BreedButton = styled.button`
  width: 180px;
  height: 34px;
  margin-bottom: 10px;
  margin-top: auto;
  background-color: white;
  border-color: transparent;
  border-radius: 10px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: ${(props) => props.theme.pink};
  cursor: pointer;
`;

const SelectsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SortButton = styled.button`
  width: 40px;
  height: 40px;
  border-color: transparent;
  border-radius: 10px;
  background-color: ${(props) => props.theme.lightGreyBgColor};
`;

export { BreedButton, SelectsWrapper, SortButton };

// export const customBreedStyles = {
//   container: () => ({
//     width: 226,
//     height: 40,
//     position: "relative",
//   }),

//   control: () => ({
//     width: 226,
//     height: 40,
//     display: "flex",
//     alignItems: "center",
//     borderColor: "transparent",
//     borderRadius: 10,
//     backgroundColor: "#F8F8F7",
//   }),

//   indicatorSeparator: () => ({
//     display: "none",
//   }),

//   indicatorsContainer: () => ({
//     position: "absolute",
//     top: 0,
//     right: 0,
//   }),

//   menu: () => ({
//     borderColor: "transparent",
//     borderRadius: 10,
//     backgroundColor: "white",
//   }),

//   menuList: () => ({
//     fontWeight: 400,
//     fontSize: 16,
//     lineHeight: 1.5,
//     color: "#8C8C8C",
//   }),

//   singleValue: () => ({
//     backgroundColor: "#F8F8F7",
//   })
// };

// export const customLimitStyles = {
//   container: () => ({
//     width: 101,
//     height: 40,
//     position: "relative",
//   }),

//   control: () => ({
//     width: 101,
//     height: 40,
//     display: "flex",
//     alignItems: "center",
//     borderColor: "transparent",
//     borderRadius: 10,
//     backgroundColor: "#F8F8F7",
//   }),

//   indicatorSeparator: () => ({
//     display: "none",
//   }),

//   indicatorsContainer: () => ({
//     position: "absolute",
//     top: 0,
//     right: 0,
//   }),

//   menu: () => ({
//     borderColor: "transparent",
//     borderRadius: 10,
//     backgroundColor: "white",
//   }),

//   menuList: () => ({
//     fontWeight: 400,
//     fontSize: 16,
//     lineHeight: 1.5,
//     color: "#8C8C8C",
//   }),
// };
