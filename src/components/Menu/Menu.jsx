import MenuCategories from "../menuCategories/MenuCategories";
import MenuPosts from "../menuPosts/MenuPosts";
import styles from "./menu.module.css";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What is web Development</h2>
      <h1 className={styles.title}>Web Development Categories</h1>
      <MenuPosts withImage={false} />
      <h2 className={styles.subtitle}>Neccessary to know</h2>
      <h1 className={styles.title}>Learning Resources</h1>
      <MenuCategories />
    </div>
  );
};

export default Menu;
