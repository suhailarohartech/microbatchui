package com.smartbatchjobui.smartbatchjobui.repositoris;

import com.smartbatchjobui.smartbatchjobui.entity.CreateBatchJobParameterEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import javax.transaction.Transactional;
import java.util.List;

@Repository
public interface CreateBatchJobParameterRepository  extends
        JpaRepository<CreateBatchJobParameterEntity,Long>{

        @Transactional
        @Modifying
        @Query(value = "DELETE FROM batch_job_parameter e WHERE e. batch_job_id=:BatchJobId" ,nativeQuery = true)
        void deleteById(long BatchJobId);
        List<CreateBatchJobParameterEntity> findAllByCreateBatchJobId (Long createBatchJobId);

}