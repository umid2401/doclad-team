import { motion, AnimatePresence } from "framer-motion";

const CurrencyGroup = ({ currencies, slideId }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={`currencies-${slideId}`}
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // exit={{ opacity: 0 }}
        // transition={{ duration: 1 }}
      >
        {currencies.map((item, i) => (
          <motion.img
            layout
            key={`currency-${slideId}-${i}-${item.className}`}
            src={item.src}
            className={item.className}
            initial={{ x: 200, rotate: 60, opacity: 0 }}
            animate={{ x: 0, rotate: 0, opacity: 1 }}
            exit={{ x: -200, rotate: -60, opacity: 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default CurrencyGroup;
