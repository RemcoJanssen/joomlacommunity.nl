<?php

namespace Akeeba\ARS\Amazon\Guzzle\Service\Exception;

use Akeeba\ARS\Amazon\Guzzle\Common\Exception\RuntimeException;

class ValidationException extends RuntimeException
{
    protected $errors = array();

    /**
     * Set the validation error messages
     *
     * @param array $errors Array of validation errors
     */
    public function setErrors(array $errors)
    {
        $this->errors = $errors;
    }

    /**
     * Get any validation errors
     *
     * @return array
     */
    public function getErrors()
    {
        return $this->errors;
    }
}
