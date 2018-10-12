<?php

/**
 * Description of Transaxion
 *
 * @author Pascal
 */
class Transaxion {
    /**
     * Transaxion.php : une bibliotheque
     * initialiser()
     * valider()
     * annuler()
     */

    /**
     *
     * @param PDO $pcnx
     */
    public function initialiser(PDO &$pcnx) {
        $lbOK = true;
        try {
            $pcnx->beginTransaction();
        } catch (PDOException $ex) {
            $lbOK = false;
        }
        return $lbOK;
    }

    /**
     *
     * @param PDO $pcnx
     */
    public function valider(PDO &$pcnx) {
        $lbOK = true;
        try {
            $pcnx->commit();
        } catch (PDOException $ex) {
            $lbOK = false;
        }
        return $lbOK;
    }

    /**
     *
     * @param PDO $pcnx
     */
    public function annuler(PDO &$pcnx) {
        $lbOK = true;
        try {
            $pcnx->rollback();
        } catch (PDOException $ex) {
            $lbOK = false;
        }
        return $lbOK;
    }

}
